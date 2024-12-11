First we establish some notation.

We consider a lattice, and denote each site with a natural number, i.e. if the lattice has N sites, one can consider the set $V=\{1,2,\dots,N\}\equiv\{i\}_{i=1,2,\dots, N}$, where each $i$ is a site of the lattice.
In this general context a site does not generally represent a particle in the lattice, but can be a general abstract entity (a neuron, a pixel, etc.).
Subsequently to each site is assigned a variable $S_i$. If we are discussing Ising-like models, then the variable is called a Ising spin, and can assume only the binary value $S_i= \pm 1$.

We will call bond a site pair $(ij)$, and will call the set of all the bonds that can be formed $B=\{(ij)\}, i\neq j, i,j \in V$. 
Between each bond $(ij)$ an interaction can be considered, so that one can define a so called interaction energy as:

$$E_{ij} = -J_{ij}S_iS_j$$

The parameter $J_{ij}>0$ indicates the bond strength and can be specific for each bond
In the framework of Ising-like models, $E_{ij}$ can be either $-J_{ij}$ if $S_i=S_j$ or $+J_{ij}$ if $S_i=-S_j$, so that the configurations with the same spins are favored in energy (because the energy is lower).
Moreover each site $i$ can have its energy:

$$ E_i = -h_iS_i $$

If the energy parameter is $h_i>0$ (and can be specific for each site), then the configuration with $S_i=+1$ has energy $-h_i$ and the configuration with $S_i=-1$ has energy $+h_i$ making the former the one favorable in energy.

One can then simply find the system Hamiltonian by summing these contribution all over the lattice:

$$ H = \sum_{(ij)\in B}E_{ij} + \sum_{i\in V} E_i $$

Obtaining the following

>[!info] **Hamiltonian of an Ising-like system**
>$$ H(\bar{S}) = - \sum_{(ij)\in B}J_{ij}S_iS_j -\sum_{i=1}^N h_iS_i $$
>
>Where $\bar{S}=\{S_1, S_2, \dots, S_N\}$, i.e. the spin configuration of the lattice.

