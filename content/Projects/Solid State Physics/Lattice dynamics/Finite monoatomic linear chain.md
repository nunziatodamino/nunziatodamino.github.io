In our treatment, we assumed an [[Projects/Solid State Physics/Lattice dynamics/Infinite monoatomic linear chain]] for simplicity, but what if we have a linear chain made up of N atoms?

It depends if we are in a situation in which we can neglect the surfaces effect. 
This is [[When the surface becomes important|easy to check]].

If we are in this situation, we apply the so-called [[Born-Von Karman boundary condition]], which are periodic boundary conditions that essentially allow a finite chain to be transformed into an infinite one. If our chain is made up of N atoms, the condition is imposed so that the displacement from the equilibrium position of the Nth atom coincides with that of the initial atom of the chain:

$$u(R_0,t) = u(R_N,t) \iff u_0 = u_N $$

This imply:

$$1 = e^{ikNa} \quad \Rightarrow \quad kNa = 2m\pi \qquad m \in \mathbb{Z}$$

That can be rewritten in function of the total crystal length, if we consider $L=Na$:

$$k= \frac{2\pi}{L}m \qquad m \in \mathbb{Z}$$

==The idea is then that while in the infinite chain $k$ can assume any value, in a finite system $k$ is discretized.==