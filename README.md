# 💠 SparkInvest Grid

A transparent, Git-backed investor hub for the SparKing and Nesle projects. This repository powers the live site at https://anlominus.github.io/Investors/ and keeps investor cards, contribution logs, and supporting documentation in sync.

## What you will find here
- **Static site**: `index.html` with dark-neon styling under `assets/` for GitHub Pages.
- **Investor data**: Structured records in `data/investors.json` rendered live on the site.
- **Donation log**: Central CSV at `data/donations-log.csv` shown on the “Live donation log” table.
- **Investor cards**: Markdown profiles stored in `investors/` for long-form context.
- **Templates**: Ready-to-copy files in `templates/` for new investor cards and donation logs.
- **Docs**: Additional guidance under `docs/` covering the project vision, project list, and usage examples.

## Quick start
1. **Preview the site**: Open `index.html` or visit the live deployment at https://anlominus.github.io/Investors/.
2. **Add an investor**:
   - Duplicate `templates/investor-card-template.md` into `investors/`.
   - Add a matching entry in `data/investors.json` with the same `id` and `slug`.
3. **Record contributions**:
   - Append rows to the personal Markdown card timeline.
   - Mirror each entry in `data/donations-log.csv` so the live table stays accurate.
4. **Submit changes**: Follow `CONTRIBUTING.md` and open a pull request.

## Repository layout
```text
assets/           # Styles and scripts for the GitHub Pages site
data/             # JSON and CSV used by the site and future automations
docs/             # Vision, project catalog, and usage guidance
investors/        # Individual investor and sponsor Markdown cards
templates/        # Copy-ready templates for cards and logs
index.html        # Landing page consumed by GitHub Pages
LICENSE           # MIT license
CONTRIBUTING.md   # Contribution process
```

## Notes on the live gear & pitch section
The “Gear” section on the site includes a public-facing investor appeal and a SparKing Studio blueprint outlining equipment, software, and infrastructure needs. Update that section in `index.html` if the pitch or requirements change.

## License
MIT — see `LICENSE` for details.
