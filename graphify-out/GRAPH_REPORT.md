# Graph Report - .  (2026-09-16)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 50 nodes · 41 edges · 13 communities (9 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `df9666d4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- layout.js
- dependencies
- scripts
- compilerOptions
- material-guide/page.js
- eslint.config.mjs
- next.config.mjs

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `compilerOptions` - 2 edges
3. `next` - 2 edges
4. `react` - 2 edges
5. `react-dom` - 2 edges
6. `eslint` - 2 edges
7. `eslint-config-next` - 2 edges
8. `Footer()` - 2 edges
9. `Navbar()` - 2 edges
10. `eslintConfig` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 4 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.22
Nodes (8): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, name, private, version

### Community 1 - "layout.js"
Cohesion: 0.28
Nodes (5): Footer(), Navbar(), barlow, cormorant, metadata

### Community 2 - "dependencies"
Cohesion: 0.29
Nodes (7): next, dependencies, next, react, react-dom, react, react-dom

### Community 3 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

## Knowledge Gaps
- **19 isolated node(s):** `eslintConfig`, `paths`, `nextConfig`, `name`, `version` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `paths`, `nextConfig` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._