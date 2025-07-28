The goals of [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Renormalization Group|Renormalization Group]] can be achieved as follows:

Consider an Hamiltonian $\mathscr{H}([K])$ where $[K] = (K_1,\dots, K_N)$ are a set of coupling constants. (e.g. for the Ising model $[K] =(\beta J, \beta H )$)
In order to achieve a coarse-grain we have to transform th coupling constant to another set $[K']$.
We assume that this is achieved by the transformation:

$$ [K'] = \mathscr{R}_l[K]\qquad l>1 $$

Where $\mathscr{R}_l$ is called a **Renormalization group (RG) transformation**. Is clear that this has the structure of a recursive relation if consider instead of one, say $n$ decimations.

## Properties of $\mathscr{R}_l$

First of all, for how it is defined , $\mathscr{R}_l$ is a map:

$$ \mathscr{R}_l : \mathbb{R}^N \to \mathbb{R}^N$$

So is a $\mathbb{R}^N$ endomorphism.

1)  $\mathscr{R}_l$ is analytical 
Or can be expanded in a (convergent) Taylor series in any point of the domain. This is to be expected as we are integrating a finite number of degree of freedom so there is no reason to expect a singularity anywhere.
2) The set of transformations $\mathscr{R}_l$ form a semi-group:
Given:

$$
\begin{aligned}
&[K'] = \mathscr{R}_{l_1}[K] \\
&[K''] = \mathscr{R}_{l_2}[K'] = \mathscr{R}_{l_2} \circ \mathscr{R}_{l_1}[K]
\end{aligned}
$$

Leading to the definition:

$$\mathscr{R}_{l_2l_1}[K]=\mathscr{R}_{l_2} \circ \mathscr{R}_{l_1}[K]$$

Note that is a semi-group and not a group as it does not exists the inverse element. This is important from a physical point of view as it implies that once that we have done the decimation we lose information on the system an cannot go back.

## Construction of $\mathscr{R}_{l}$

There is no prescribed way to build this function. It depends on the system and can be carries either in real or momentum space.

## Properties of the transformed Hamiltonian

Consider the new Hamiltonian after the decimation $\mathscr{H}'([K]')$.
This in general should not have the same form as the one before the transformation (as we saw in the Kadanoff argument), **but should conserve the symmetry**.

This means (and this is the great improvement with respect to Kadanoff’s argument) that **the decimation can make some new terms appear in the coarse-grained Hamiltonian, as long as they respect the same symmetries of the original system.**

## Invariance of the canonical partition function

**The canonical partition function is invariant after any decimation:**

$$ \mathcal{Z}_{N'}([K']) = \mathcal{Z}_{N}([K]) $$

Where we recall that after any decimation $N' = \frac{N}{l^d}$. So the free energy:

$$ f([K']) = -\frac{1}{\beta N'}\ln\mathcal{Z}_{N'}([K']) =  -\frac{l^d}{\beta N}\ln\mathcal{Z}_{N}([K]) = l^df([K]) $$

Leading to :

$$ f([K]) = l^{-d}f([K']) $$

Which is the Kadanoff scaling argument that justifies the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Widom's scaling hypothesis|Widom's scaling hypothesis]].
