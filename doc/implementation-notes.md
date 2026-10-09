# Radioactive Dating — Implementation Notes

This document orients future maintainers. Decay Story is currently a model/view scaffold; its design is specified
before implementation. The responsibilities below are constraints for that work, not claims about implemented systems.

## At a glance

| Area | Source | Status |
|---|---|---|
| Decay Story screen | [DecayStoryScreen.ts](../js/decay-story/DecayStoryScreen.ts) | Screen wiring |
| Screen model | [DecayStoryModel.ts](../js/decay-story/model/DecayStoryModel.ts) | Stub |
| Screen view | [DecayStoryScreenView.ts](../js/decay-story/view/DecayStoryScreenView.ts) | Scaffold |
| Public design and text | [RadioactiveDatingDesign.ts](../specs/RadioactiveDatingDesign.ts) | Designed elements, defaults, metadata, strings |
| Interaction contract | [behavior.md](../specs/behavior.md) | Includes unresolved decisions |
| Shared graph design | [decayGraphDesign.ts](../../nuclear-decay-common/specs/lib/decayGraphDesign.ts) | Reuse contract for graph, probe, and related components |
| Executable checks | [specs/](../specs/) | Acceptance targets; not passing-runtime evidence |

The corpus freezes the other four screens. Do not extend their behavior to resolve a Decay Story design question.

## Responsibilities to preserve during implementation

- Keep radiometric age separate from story-animation progress. Newly cooled rocks start at age zero, while the
  meteorite reveals its existing age on arrival. The shared `forming` phase does not imply physical formation.
- Object chronology is independent of the selected isotope. Changing isotope changes the measurement and graph
  units, without restarting or retiming the object story.
- Compute exact percentages from age and the selected half-life. Keep the stochastic 100-atom sample separate;
  graph and probe values must not derive from noisy counts. Hiding and sorting do not resample.
- Round only the visual time readout. Retain unrounded age for graph, probe, percentages, and half-life events.
- Treat reset and object replacement as cancellation boundaries for animation progress and pending story alerts.
  A previous eruption cannot later change the replacement story's phase or speak its completion.
- Use the shared nuclear-decay-common components required by the design. Extend them for specific needs rather than
  copying their implementations. Record shared changes here when made.
- Subscribe descriptions to every value and translatable string they read. Summary branches distinguish initial,
  forming, decaying with data, and decaying without data.

No sample storage layout, random-seed policy, animation ownership classes, disposal policy, or state serialization
scheme has been implemented yet. Document those decisions here as they are made. Resolve the open decisions in
behavior.md before adding a state schema that would make an accidental choice part of the public contract.

## Design maintenance

The design module owns English design text; `design-lab/scripts/emit-strings` emits it to the YAML file while
preserving entries outside this partial design. Run string modulification after generation. Mockups are independent
visual targets and must be updated explicitly when the approved design changes.

Specs can use tooling locators or narrow readers for rendered geometry without making individual sample atoms or
animation internals public PhET-iO elements. A test that reads a model percentage is not evidence that the plotted
curve or sample rendering uses that percentage. Keep those observation layers separate.
