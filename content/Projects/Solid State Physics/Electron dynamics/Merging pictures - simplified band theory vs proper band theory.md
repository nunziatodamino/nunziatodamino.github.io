When searching for band theory it's extremely probable that images of the following kinds appears

![[Immagini/Merging pictures - ''blocky'' band theory vs proper band theory-1.png|300]]![[Immagini/Merging pictures - ''blocky'' band theory vs proper band theory-2.png|300]]

These images are extremely different from the one derived, say, in [[Projects/Solid State Physics/Electron dynamics/Tight binding calculation to an s-band arising from a single atomic s-level in a cubic lattice|Tight binding calculation to an s-band arising from a single atomic s-level in a cubic lattice]] , [[Projects/Solid State Physics/Electron dynamics/Free electrons (Empty lattice) via the central equation in 1 dimension|Free electrons (Empty lattice) via the central equation in 1 dimension]] or [[Projects/Solid State Physics/Electron dynamics/Quasi-free electrons via the central equation in 1 dimension|Quasi-free electrons via the central equation in 1 dimension]].

Now we show that are indeed ways to show the same picture.

First, some considerations. 
Suppose we have a $\sim1\ \text{cm}^3$ of material , say copper to fix the idea, and estimate how many unit cell there are in the material. Copper has a density of $8.96\ \text{g/cm}^3$ so that we have in our case $8.96\ \text{g}$ of material and a total of $\sim 0.14\ \text{mol} \sim 8.4\cdot10^{22}\ \text{atoms}$ in our sample.
Copper has an FCC structure. Given that we know that in a FCC structure I have $4$ atoms per unit cell, I expect a total of $N\sim 2.1\cdot10^{22}$ unit cells. 
Finally, given that I have a $2N$ possible values of $k$ due to this discretization, I expect a discretization in $k$ of the order of $\sim 10^{22}$.

So I can conclude that in a $\sim1\ \text{cm}^3$ of material I have  $\sim 10^{22}$ possible values of $k$.
This implies that the values of the energy $E(\bar{k})$, even if discretized , are almost continuous.
This because, chosen a given direction in the first Brillouin zone I'm dividing it in $\sim 10^{22}$ parts, so that $\Delta E = E(k_{i+1})-E(k_{i})\sim 10^{-22}\ \text{eV}$ if we consider a linear expansion approximation.
### What is simplified (or ''blocky'') band theory

What I call ''blocky'' band theory is a simplified version of band theory. 
The electron can assume energy in 2 main ranges, called the valence band and the conduction band that can be separated or not by a gap, called band gap.
Knowing that the Fermi energy (in this context sometimes called Fermi level) is the maximum energy an electron can have, once is fixed the electrons cannot exceed it.
According to the band gap we classify then the materials in metals, semi-metals, semiconductors or insulators.
This scheme, while certainly intuitive, lacks the depth of what is shown in theory.
We know try to merge the different schemes.

### Simplified band theory vs. Electron energy dispersion curves

![[Immagini/Merging pictures - simplified band theory vs proper band theory.png|500]]

The idea is simple: given that in a typical material sample (in our previous sample we estimated to be $\sim 1\ \text{cm}^3$) we have that the distance between each possible allowed $k$ value is $\sim 10^{-22}$ , also the energies will be distanced by the same amount, leaving in fact a range of energy that the electron can occupy. (even if in reality energy is discretized, not continuous)

### Simplified band theory vs. Tight binding scheme

![[Immagini/Merging pictures - simplified band theory vs proper band theory-1.png]]

Same reasoning applies to the tight binding scheme, while in this case is more clear the role of the valence and the conduction band.