DECK ?= github-enterprise-platform
PORT ?= 4100

.PHONY: help install list dev build build-all pdf pptx clean check

help:
	@echo "Slides repo commands"
	@echo ""
	@echo "  make install          Install dependencies"
	@echo "  make list             List available decks"
	@echo "  make dev              Run selected deck locally, correcting close typos and freeing PORT if needed"
	@echo "  make build            Build selected deck"
	@echo "  make build-all        Build all decks"
	@echo "  make pdf              Export selected deck to PDF"
	@echo "  make pptx             Export selected deck to PPTX"
	@echo "  make check            Syntax-check local scripts and build selected deck"
	@echo "  make clean            Remove generated outputs"
	@echo ""
	@echo "Variables:"
	@echo "  DECK=$(DECK)"
	@echo "  PORT=$(PORT)"

install:
	npm install

list:
	npm run list

dev:
	PORT=$(PORT) npm run dev -- $(DECK)

build:
	npm run build -- $(DECK)

build-all:
	npm run build:all

pdf:
	npm run export:pdf -- $(DECK)

pptx:
	npm run export:pptx -- $(DECK)

check:
	node --check scripts/deck.mjs
	npm run build -- $(DECK)

clean:
	rm -rf dist decks/*/.slidev-dist .slidev
