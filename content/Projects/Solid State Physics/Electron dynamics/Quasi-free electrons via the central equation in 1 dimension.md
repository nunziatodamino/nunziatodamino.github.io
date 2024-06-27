We recall the [[Projects/Solid State Physics/Electron dynamics/The central equation in 1 dimension|The central equation in 1 dimension]]:

$$\left(E^0_{k-G} - E\right)C_{ k - G} + \sum_{G'}C_{ k -G'}V_{G'-G}=0$$

Now we want to analyze the situation for a small potential (quasi-free approximation).
This case is typical of metals, specially for electrons in the valence shell.

#### Near or at Brillouin zone border

First we explicit from the equation the coefficients $C_{k-G}$:

$$C_{ k - G} =\frac{ \sum_{G'}C_{ k -G'}V_{G'-G}}{E-E^0_{k-G} }$$

Now, if we have a small perturbation we have that the actual energy of the system $E$ is approximate to the free electron energy.
Moreover suppose that we are interested at the biggest $C_{ k - G}$ coefficient.
Given the equation in the frame of our approximation, this happens when:

$$ k^2 \simeq |\bar {k}-\bar{G}|^2 $$

For a specific value of the vector $\bar{G}$.
Notice that this is [[Projects/Solid State Physics/Crystal structures and bonds/Considerations on the Bragg scattering within a Bravais lattice|Bragg condition]], and is satisfied by $\bar{k}$ vectors at the edge of the first Brillouin zone.
We conclude that the coefficients $C_{ k - G}=C_{k}$ and that they are the biggest, hence in the summation only these 2 survives.
So we find them setting the relative central equations:


$$\begin{cases}
\left(E^0_{k} - E\right)C_{ k } +C_{ k }V_{0}+C_{ k -G}V_{G}=0 \qquad\qquad (\bar{G}=0) \\
\left(E^0_{k-G} - E\right)C_{ k - G} + C_{ k }V_{-G} +C_{ k -G}V_{G-G}=0 \qquad\qquad (\bar{G}=\bar{G}) \\
\end{cases}
$$
$$\begin{cases}
\left(E^0_{k} - E\right)C_{ k } + C_{ k-G }V_{G}=0 \\
\left(E^0_{k-G} - E\right)C_{ k-G } + C_{ k }V_{-G}=0 \\
\end{cases}
$$

We implicitly used the fact that $V_0=0$.
Now, by using that $C_{ k - G}=C_{k}$, we can find a solution by imposing that the determinant must be $0$:

$$\det\begin{Vmatrix}
E^0_{k} - E & V_{G} \\
E^0_{k-G} - E & V_{-G} \\
\end{Vmatrix} = 0 \qquad \iff \qquad (E^0_{k} - E)V_{-G}-(E^0_{k-G} - E)V_{G}=0 
$$

One can then find the value of $E$, that is :

$$ E_{\pm} = \frac{1}{2}(E^0_{k}+E^0_{k-G}) \pm \sqrt{\frac{1}{4}(E^0_{k-G}+E^0_{k})+ |V_{G}|^2}  $$

Finally one obtains that exists an energy separation:

$$ \Delta E = E_+-E_- = \sqrt{(E^0_{k-G}+E^0_{k})+ 4|V_{G}|^2} $$

That at the Brillouin zone border (where $k^2 \simeq |\bar {k}-\bar{G}|^2$, and thus $E^0_{k-G}\simeq E^0_{k}$ ), it becomes:

$$ \Delta E_{\text{BZ border}} = 2|V_{G}| $$

![[Immagini/Quasi-free electrons via the central equation in 1 dimension.png|300]]

#### Far from Brillouin zone border

Notice that the previous treatment is valid near or at the border of the Brillouin zone, due to the Bragg condition that gives us the condition for the maximum value of the $C$ coefficients.
Suppose instead that we are far from the Brillouin zone border.
Suppose that it exists a reciprocal lattice vector $\bar{G}^*$ for which $C_{ \bar{k} -\bar{G}^*}\sim 1$ and $C_{ \bar{k} -\bar{G}}\sim 0$ for $\bar{G} \neq \bar{G} ^*$. Then for a generic coefficient:

$$C_{ k - G} =\frac{ \sum_{G'}C_{ k -G'}V_{G'-G}}{E-E^0_{k-G} } \sim \frac{ C_{ k -G^*}V_{G^*-G}}{E-E^0_{k-G} } $$

If one then plugs back:

$$\left(E^0_{k-G} - E\right)C_{ k - G} + \sum_{G'}\left[ \frac{ C_{ k -G^*}V_{G^*-G'}}{E-E^0_{k-G'} } \right]V_{G'-G}=0$$

Suppose then we want to find specifically the coefficient $C_{ \bar{k} -\bar{G}^*}$. We set then the corresponding equation:

$$\left(E^0_{k-G^*} - E\right)C_{ k - G^*} + \sum_{G'}\left[ \frac{ C_{ k -G^*}V_{G^*-G'}}{E-E^0_{k-G'} } \right]V_{G'-G^*}=0$$

Finally we can simplify the coefficient and obtain the condition:

$$-\Delta \equiv\left(E^0_{k-G^*} - E\right)=- \sum_{G'}\frac{ |V_{G^*-G'}|^2}{E-E^0_{k-G'} } $$

Obtaining that the difference in energy between the energy of the system from the empty lattice counterpart is small and proportional to $|V_{G^*-G'}|^2$.