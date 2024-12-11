In this model, $E(\bar{k})$ is a sphere given by the expression:

$$ E(\bar{k}) = \frac{\hbar^2}{2m} (k_x^2+k_y^2+k_z^2) $$

To evaluate the density of states, we use the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Electronic density of states|general expression]]

$$D(E) = 2 \frac{V}{(2 \pi)^3} \int_{\text{shell}} dS_{E} \frac{1}{|\nabla_{\bar{k}}(E(\bar{k}))|} $$

We then obtain, according to dimensionality : (notice that the given formula is valid only for the 3D case. For the others must be modified. Detailed evaluation [[Electron DOS for free electron model.pdf|here]] )

- 0D:    $D(E) = 2 \delta (E-E_0)$
- 1D:    $D(E) = \frac{L}{\pi} \frac{\sqrt{2m}}{\hbar} \frac{1}{\sqrt{E}}$
- 2D:    $D(E) = \frac{S}{\pi} \frac{m}{\hbar^2}$
- 3D:    $D(E) = \frac{V}{2\pi^2} \left(\frac{2m}{\hbar^2}\right)^{3/2} \sqrt{E}$


![[Images/Pasted image 20230203123324.png|300]]

It is also possible to derive an expression that is independent of the system's dimensionality if we know the number of electrons in the system with energy lower than $E$. 
By using the density of states definition, we have:

$$ D(E)dE = dN'  \qquad \iff \qquad D(E) = \frac{dN'}{dE}$$

We now evaluate the number of occupied states in function of the energy

$$N' = 2 \frac{\frac{4}{3}\pi k^3}{\frac{(2\pi)^3}{V}} =  2 \frac{\frac{4}{3}\pi }{\frac{(2\pi)^3}{V}} \left( \frac{2mE}{\hbar^2} \right)^{3/2} = \alpha E^{3/2} $$

So, by derivation 

$$ D(E) = \frac{3}{2} \alpha E^{1/2} = \frac{3}{2} \alpha E^{1/2}\frac{E}{E} = \frac{3}{2}\frac{\alpha E^{3/2}}{E} = \frac{3}{2}\frac{N'}{E}    $$

Here, $N'$ is the number of electronic states with energy equal to or lower than $E$. This reformulation is useful when evaluated at the Fermi energy. In fact, it allows us to assume that $N' = N$, the total number of electrons in the system:

$$ D(E_F) = \frac{3}{2} \left( \frac{N}{E_F} \right) $$

Note that this is exactly true only at $T=0\ K$, where the chemical potential coincides with the Fermi energy.