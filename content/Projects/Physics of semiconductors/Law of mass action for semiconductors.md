One big problem with the formula [[Projects/Physics of semiconductors/Electrons and holes densities evaluation in a 3D homogeneous semiconductor using the non-degenerate hypothesis for a non degenerate band|Electrons and holes densities evaluation in a 3D homogeneous semiconductor using the non-degenerate hypothesis for a non degenerate band]] is that we don't know the Fermi level.

One can then resort to one simple trick, i.e. multiply the 2 formula together to make the Fermi level disappear from the equation:

> [!info] **Law of mass action for semiconductors**
> For a non degenerate semiconductor it holds the fundamental:
> $$np =N_cN_v e^{-\frac{\Delta E_{gap}}{k_BT}} = N_cN_v e^{-\frac{E_c-E_v}{k_BT}} \equiv n_i^2 \qquad N_c = \frac{1}{\sqrt{2}}\left[\frac{m_c^*k_BT}{\pi\hbar^2} \right]^{3/2},\ N_v = \frac{1}{\sqrt{2}}\left[\frac{m_v^*k_BT}{\pi\hbar^2} \right]^{3/2}$$

It is called in this way because we can see this process formally as the chemical reaction:

$$ h^+ + e^- \underset{k_C}{\overset{k_A}{\rightleftarrows}} \phi $$

Where we indicate with $\phi$ the empty state . So we can use the proper [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/Law of mass action|Law of mass action]]:

$$ np = K_{eq}=\frac{k_C}{k_A} $$

## Intrinsic semiconductor hypothesis

In the case of an intrinsic semiconductor, i.e. a non-doped semiconductor, we can make the **charge neutrality hypothesis for undoped semiconductors**, simply speaking, giving that the material is neutral, the electron and the hole density must be equal $n = p$, so we can rewrite the law of mass action as:

$$ n_i^2 = N_cN_v e^{-\frac{E_c-E_v}{k_BT}} \iff n_i = \sqrt{N_cN_v} e^{-\frac{E_c-E_v}{2k_BT}}$$

We report here a graph plotting the intrinsic carrier concentration for the most important semiconductors in function of the temperature :

![[Images/Law of mass action for semiconductors.png|300]]

Of these values the most important one is the room temperature one, that is reported separately in the following table:

![[Images/Law of mass action for semiconductors-1.png|400]]

A technical note, of these only the Ge can be produced in this regime. Because we need that the number of dopants must be lower than the table number. (?)