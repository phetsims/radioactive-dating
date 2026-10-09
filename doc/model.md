# Radioactive Dating - Model Description

This document describes the scientific representation for teachers and curious learners. The Decay Story section
is the planned design; that screen is not yet implemented. For how the code is
organized, see implementation-notes.md.

## Screens built on nuclear-decay-common

The Half-Life and Decay Rates screens are the shared screens of the nuclear-decay family (see the model description of
Alpha Decay and Beta Decay): a sample of radioactive atoms, each decaying at random with the probability its half-life
gives, and a decay graph of the percentage remaining against time.

## Decay Story

The Decay Story screen follows one object at a time - a tree, pumice, granite or a meteorite - through a story relating its age to radioactive decay. The meteorite arrives with an existing age; its impact
does not start or reset its radiometric clock.

### Decay

The percent of parent isotope remaining is deterministic and exact: `100 x 0.5^(age / halfLife)`, and the daughter
percent is `100 - parent`. At each half-life the percentages are therefore exactly 50, 25, 12.5 and so on. The 100
atoms shown in the sample area are a random sample of the same process: each atom decays with the correct probability
each step, so their count fluctuates around the exact percentage across trials while parent plus daughter always
sum to 100. Counts are whole numbers. A particular sample need not be close to the graph, and the graph never
follows sample noise. Sorting or hiding the sample does not change its atoms or stop their decay.

| Isotope      | Half-life (years) | Daughter    |
|--------------|-------------------|-------------|
| Carbon-14    | 5,730             | Nitrogen-14 |
| Potassium-40 | 1.25 x 10^9       | Argon-40    |
| Uranium-238  | 4.47 x 10^9       | Lead-206    |

The potassium-40 and uranium-238 half-lives are the rounded values shown on screen (more precise measurements give
1.248 x 10^9 and 4.468 x 10^9 years). The model uses the displayed values so that every readout, and any answer a
learner works out from the displayed half-life, agrees with the simulation exactly.

### Which isotope dates which object

In the selected examples and dating methods represented here, carbon-14 dates only the tree (once-living material). Potassium-40 dates pumice, granite and the meteorite.
Uranium-238 dates granite and the meteorite; the chosen pumice example is excluded from that method. This is the
simulation's object/method matrix, not a claim that every real specimen has the same composition or dating options. An
isotope that cannot date the selected object shows no data rather than a curve.

### Radiometric closure and time

The age counts years since closure: since the tree died, since the erupted pumice cooled, since the magma cooled into
granite. The clock therefore starts some seconds after the story is triggered for the rocks, and immediately for the
tree. Time runs at 300 years per second for the tree and, for the rocks, ramps up to 2 x 10^8 years per second. The
carbon-14 story ends at 35,000 years, the right edge of its graph.

### Simplifications

- The meteorite arrives already 4.56 x 10^9 years old, the selected formation age used for this story, so its curve begins part way down (about
  49% of its uranium-238 and 8% of its potassium-40 remaining), drawn as a dashed pre-history before the impact.
- Pumice is shown unchanged for billions of years; real pumice devitrifies within a few tens of millions of years.
- Granite forms in seconds of screen time; the "Thousands of years later..." interstitial stands in for a cooling too
  slow to animate.
- The sample area always shows exactly 100 atoms so a count reads directly as a percentage; a real sample contains
  vastly more, which is why the graph is smooth and exact at each half-life while the atoms are noisy.
- In the optional carbon-14 to carbon-12 ratio view, the ratio of living carbon is taken as 1.3 x 10^-12 and carbon-12
  is treated as constant.


### Time scales and graph domains

| Quantity | Planned value or behavior |
|---|---|
| Tree rate at Normal speed | 300 years per second of playback |
| Cooled rock rate at Normal speed | Ramps over roughly two seconds to 200 million years per second |
| Slow speed | 0.4 times Normal |
| Fast speed | Faster than Normal; multiplier not yet specified |
| Step during decay | One quarter of the selected isotope's half-life |
| Carbon graph domain | 0–35,000 years, approximately six half-lives |
| Potassium graph domain | 0–7.5 billion years, exactly six half-lives |
| Uranium graph domain | 0–26.82 billion years, exactly six half-lives |
| Tree story endpoint | 35,000 years, independent of the displayed isotope |
| Rock story endpoint | Still to be decided |

Rock ages in the main visual readout are rounded down to the nearest 100 million years, always shown as a full
number of years. For example, the first potassium half-life reads 1,200,000,000 yrs there; the half-life marker and
probe retain the unrounded 1.25-billion-year value. Rounding the readout never changes the decay calculation.
Spoken ages and graph axes use years for carbon and billion years for potassium and uranium.

### Closure and storytelling

Tree death immediately starts its age clock. Pumice erupts for about six seconds and cools for three before its age
clock starts. Granite's three-second eruption shutdown and six-second cooling interstitial compress its formation.
Those animation times support the story; they are not physical cooling durations.

The meteorite instead carries 4.56 billion years of history into the scene. The initial zero age is a value before
its age is revealed, not a claim about when it formed. Arrival reveals its existing age and subsequent aging
continues from there. Its dashed curve depicts pre-arrival history; the solid curve depicts the subsequent story.
Whether the probe reads inferred pre-arrival history remains to be decided.

### Limits of the representation

The chosen parent/daughter percentages are complementary bookkeeping for this simplified decay model. They should
not be taken as a complete description of real decay chains, branching, or all materials' initial daughter content.
The tree illustrations are staged at carbon half-life landmarks for teaching; they do not predict real rates of
falling, decomposition, or fossilization. Isotope selection changes the dating method displayed, not that chronology.
The object/method matrix and associated absence-of-data wording still need scientific designer review.
