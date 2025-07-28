The zipper model is the simplest model for the thermal denaturation transition (the process in which a biomolecule, such as DNA, RNA, or proteins, loses its native (structured) state due to increasing temperature. This transition is often cooperative, meaning that once denaturation begins, it accelerates until the entire molecule is disrupted) for polymers such as DNA. Note that this model, even if made for the DNA in mind, is better suited for oligomers (short (10-20 monomers) polymers), so for DNA strands.

The real importance of this model is that it violates the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/Perron-Frobenius Theorem|Perron-Frobenius Theorem]] : ....


### Single-ended zipper

Let's consider the case in which 2 chains of $N$ atoms each are bonded through parallel bonds. We label each bond or link with the label of the atom, from $1$ to $N$. For simplicity we assume that the chain are made of identical atom.
The zipper can be undone only from left to right, i.e. we consider that the first $1, \dots, k$ with $k<N$ links are open. The constrain is that the $N$-th link is always closed and no bubbles are admitted, i.e. the link must be open sequentially.

![[Images/The Zipper model.png]]

We study this system in the canonical ensemble.
If all links are closed, the system is considered to be at the energy zero, that if each bond requires an energy $\varepsilon_{0}$ to be broken, greater the energy, greater the amount of open links (say $E = k\varepsilon_{0}$, will correspond to a system with k open links).

In order to derive any thermodynamic property, we can write the partition function.

$$ \mathcal{Z} = \sum_{\{C\}}e^{-\beta E(C)} = \sum_{k=1}^{N-1}G^ke^{-\beta k \varepsilon_0} $$

Where $G^k$ is the degeneracy of the configuration with $k$ open links. This depends on the model of the move of the free link in question. We make here a stupid example, the self-avoiding walk (SAW) on a square lattice. Suppose to have 1 open link. Then the free strand can be horizontal, up or down (3 possible configuration), all with energy $\varepsilon_0$. Than $G^1 = 3$ ($e^{-\beta\varepsilon_0}+e^{-\beta\varepsilon_0}+e^{-\beta\varepsilon_0} = 3e^{-\beta\varepsilon_0}$). Continuing, when we have 2 open links, given the possibilities, we have $9 = 3 \times 3$ possible configuration, so that $G^2 = 3^2 = 9$. Is then clear the generalization by induction.
Note also that the sum extends to $N-1$ because the $N$-th link is always closed.

Note also that if one defines the entropy in the usual way $S = k_B\ln G$, we can rewrite the partition function as :

$$ \mathcal{Z} = \sum_{k=1}^{N-1}e^{\beta kST}e^{-\beta k \varepsilon_0} = \sum_{k=1}^{N-1}e^{-\beta k (\varepsilon_0-ST)} $$

This partition function is easy to evaluate, as is a geometric series $\sum_{k=1}^{N-1}x^k = \frac{1-x^N}{1-x}$, then by setting $x = e^{-\beta(\varepsilon_0-ST)}=Ge^{-\beta \varepsilon_0}$ , we obtain:

$$ \mathcal{Z}_N = \frac{1-G^Ne^{-\beta N  \varepsilon_0}}{1-Ge^{-\beta \varepsilon_0}} $$

And from this the free energy follows easily:

$$ F_N = -k_bT\ln\mathcal{Z}_N -k_bT\ln \left[ \frac{1-G^Ne^{-\beta N  \varepsilon_0}}{1-Ge^{-\beta \varepsilon_0}}  \right] $$

From these results we can evaluate some important properties of the model.
#### Average number of open links

We want to evaluate:

$$ \braket{k} = \frac{\sum_{k=1}^{N-1} k e^{-\beta k (\varepsilon_0-ST)}}{\sum_{k=1}^{N-1}e^{-\beta k (\varepsilon_0-ST)}} = \frac{\sum_{k=1}^{N-1} k x^k}{\sum_{k=1}^{N-1}x^k} \qquad x = e^{-\beta (\varepsilon_0-ST)} $$

For the evaluation we observe that:

$$ 
\begin{aligned}
 \braket{k} = \frac{\sum_{k=1}^{N-1} k x^k}{\sum_{k=1}^{N-1}x^k} &= x \frac{d}{dx}\left[ \ln\left( \sum_{k=1}^{N-1}x^k  \right) \right] =  \frac{x}{\sum_{k=1}^{N-1}x^k} \frac{d}{dx}\left[ \sum_{k=1}^{N-1}x^k  \right] =\\

&=\frac{x}{\sum_{k=1}^{N-1}x^k} \frac{d}{dx}\left[ \frac{1-x^N}{1-x} \right] =\frac{x}{ \frac{1-x^N}{1-x}} \frac{-Nx^{N-1}(1-x)+(1-x^N)}{(1-x)^2} = \\

&= \frac{Nx^{N}}{x^N-1} + \frac{x}{1-x}
\end{aligned}
$$

This is the general expression. Now we study this expression in function of the control parameter $x$ to determine when the phase transition happens
We show in the following a rough plot.

![[Images/The Zipper model - av open links.png|300]]

Calculation are made in [[Calculations/study of the function k in the single ended zipper model.pdf|here]].
So we have that the transition happens $x_C = 1$. As already showed in the calculations :

$$ \lim_{x\to 1} \braket{k} = \frac{N-1}{2} \sim\frac{N}{2} $$

While for the response function : 

$$ \lim_{x \to 1} \frac{1}{N} \frac{d \braket{k}}{dx} = \frac{(N-1)(N-2)}{6N} \propto N $$

I.e we have that at the critical point the response function diverges linearly with $N$.

One can ask, what is the critical temperature associated with $x_C = 1$ ?
One can find it simply by the $x$ definition :

$$1 =x_C =Ge^{-\beta \varepsilon_0} \iff T_C = \frac{\varepsilon_0}{k_B \ln G}$$

**With this one can imply that, if $G \to 1$, i.e. when unzipping in the excited state (state that exhibits the critical behavior) the chain has one possible configuration (or has no degeneracy), then $T_C \to +\infty$, i.e. the model does not display phase transition.**
So, given that $G \in \mathbb{N}$ this is the only case in which the model does not have a phase transition. In general $T_C \neq 0$ for $G \neq 1$

From this we sense that degeneracy is linked with phase transition, i.e. if the system presents degeneracy in 1D, then it may exhibit a phase transition.