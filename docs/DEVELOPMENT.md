# Development Guide

Complete guide for developing, debugging, and building FastWLAT.

## Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git** (for version control)
- **Windows/macOS/Linux** (any platform)

## Quick Start

### 1. Clone & Install

```bash
# Clone repository
git clone https://github.com/yourusername/fastwlat.git
cd fastwlat

# Install dependencies
npm install
```

### 2. Run Application

```bash
npm start
```

The application will launch in a new window.

## Development Workflow

### Project Structure

```
fastwlat/
├── src/                    # Source code
│   ├── main/              # Electron main process (Backend)
│   │   ├── index.ts       # Main entry point
│   │   └── ipGeoLocationService.ts  # IP geolocation
│   └── preload/           # Preload scripts
│       ├── index.ts       # Preload entry
│       └── index.d.ts     # Type definitions
├── out/                   # Compiled output
│   ├── main/              # Compiled backend
│   ├── preload/           # Compiled preload
│   └── renderer/          # Pre-compiled frontend
├── data/                  # GeoIP databases
├── resources/             # Application resources
└── scripts/               # Build scripts
```

### Backend Development

Backend code is in `src/main/` and `src/preload/`.

**Main Process** (`src/main/index.ts`):
- Window management
- IPC handlers
- System-level operations

**IP Geolocation Service** (`src/main/ipGeoLocationService.ts`):
- MaxMind database integration
- IP lookup with caching
- Batch processing

**Preload Script** (`src/preload/index.ts`):
- Secure API bridge between main and renderer
- IPC communication wrapper

### Frontend (Pre-compiled)

Frontend is pre-compiled in `out/renderer/`. To modify frontend:
1. Contact maintainers for source code
2. Make changes in Vue source
3. Rebuild with Vite
4. Copy output to `out/renderer/`

## Available Commands

### Development

```bash
# Start application
npm start

# Verify build integrity
npm run verify
```

### Building

```bash
# Build for current platform
npm run build

# Build for specific platforms
npm run build:win      # Windows
npm run build:mac      # macOS
npm run build:linux    # Linux

# Build unpacked (for testing)
npm run build:dir
```

### Maintenance

```bash
# Install dependencies
npm install

# Rebuild native modules
npm run postinstall
```

## Debugging

### Debug Main Process

1. **Using VS Code**

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": ["."],
      "outputCapture": "std"
    }
  ]
}
```

2. **Using Console Logs**

Add console.log statements in `src/main/`:

```typescript
console.log('[Debug]', data);
```

View output in terminal where you ran `npm start`.

### Debug Renderer Process

1. **Open DevTools**

Press `F12` or `Ctrl+Shift+I` (Windows/Linux) / `Cmd+Option+I` (macOS)

2. **Console Logs**

Frontend logs appear in DevTools Console.

### Debug IPC Communication

Add logging in both processes:

**Main Process:**
```typescript
ipcMain.handle('channel', async (event, data) => {
  console.log('[IPC Main]', data);
  return result;
});
```

**Renderer Process:**
Check DevTools Console for IPC calls.

## Testing

### Manual Testing

1. **Start Application**
   ```bash
   npm start
   ```

2. **Test Features**
   - Import log files
   - View analysis
   - Check geolocation
   - Export data

3. **Check Console**
   - No errors in terminal
   - No errors in DevTools

### Automated Verification

```bash
npm run verify
```

Checks:
- ✅ All required files present
- ✅ Dependencies installed
- ✅ Configuration valid
- ✅ Project statistics

### Build Testing

```bash
# Build unpacked version
npm run build:dir

# Run built application
cd dist/win-unpacked
./FastWLAT.exe  # Windows
# or
open FastWLAT.app  # macOS
# or
./fastwlat  # Linux
```

## Common Issues

### Issue: Application won't start

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild native modules
npm run postinstall
```

### Issue: GeoIP not working

**Solution:**
1. Check `data/` directory exists
2. Verify database files:
   - `GeoLite2-City.mmdb`
   - `GeoLite2-Country.mmdb`
   - `GeoLite2-ASN.mmdb`
3. Check console for loading errors

### Issue: Build fails

**Solution:**
```bash
# Clear cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install

# Try again
npm run build:dir
```

### Issue: Native module errors

**Solution:**
```bash
# Rebuild for Electron
npm run postinstall

# Or manually
npx electron-rebuild
```

## Performance Tips

### Development

1. **Fast Reload**
   - Changes to main process require restart
   - Frontend is pre-compiled (no hot reload)

2. **Memory Usage**
   - Monitor with Task Manager
   - Check for memory leaks in DevTools

3. **Database Performance**
   - IP lookups are cached
   - Batch queries are optimized

### Production

1. **Build Optimization**
   - Frontend already minified
   - ASAR packing reduces file count
   - Native modules unpacked for performance

2. **Startup Time**
   - Database loads on startup
   - Cache warms up with use

## Code Style

### TypeScript

```typescript
// Use interfaces for types
interface MyData {
  id: string;
  value: number;
}

// Use async/await
async function fetchData(): Promise<MyData> {
  const result = await someAsyncOperation();
  return result;
}

// Use arrow functions
const handler = (data: MyData) => {
  console.log(data);
};
```

### Naming Conventions

- **Files**: camelCase.ts
- **Classes**: PascalCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces**: PascalCase

### Comments

```typescript
// Good: Explain WHY, not WHAT
// Cache results to avoid repeated database queries
const cached = cache.get(key);

// Bad: Obvious comment
// Get value from cache
const cached = cache.get(key);
```

## Git Workflow

### Branching

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
git add .
git commit -m "Add my feature"

# Push
git push origin feature/my-feature
```

### Commit Messages

```
feat: Add new feature
fix: Fix bug in geolocation
docs: Update README
refactor: Improve code structure
test: Add tests
chore: Update dependencies
```

## Release Process

### 1. Update Version

```bash
# Update package.json version
npm version patch  # 1.1.0 -> 1.1.1
npm version minor  # 1.1.0 -> 1.2.0
npm version major  # 1.1.0 -> 2.0.0
```

### 2. Update Changelog

Edit `CHANGELOG.md`:
```markdown
## [1.2.0] - 2026-02-15

### Added
- New feature X

### Fixed
- Bug in Y
```

### 3. Build

```bash
# Build for all platforms
npm run build:win
npm run build:mac
npm run build:linux
```

### 4. Test

Test built applications on target platforms.

### 5. Tag & Release

```bash
# Create tag
git tag v1.2.0

# Push tag
git push origin v1.2.0

# Create GitHub Release
# Upload distribution files
```

## Resources

### Documentation
- [Electron Docs](https://www.electronjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MaxMind GeoIP](https://dev.maxmind.com/geoip)

### Tools
- [electron-builder](https://www.electron.build/)
- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)

## Support

- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Email**: support@example.com

## License

MIT License - see LICENSE file
