
We can classify material according to the fact that they conduct electricity or not.
Then is useful to evaluate the current density $\bar{J}$ in a band. We know that there are $2N$ electrons in each band (so an even number), where $N$ is the number of unit cells in the system, each of which has a different velocity due to the [[Projects/Solid State Physics/Electron dynamics/Electron velocity and band energy|relation]] : $\bar{v}_n(\bar{k})=\frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})$.
Then, to obtain the current density we have to sum over all velocities:

$$ \bar{J} = -2ne \sum_{\bar{k}\ \in\ \text{occupied} } \bar{v}_n(\bar{k}) = -2\frac{e}{V} \sum_{\bar{k}\ \in\ \text{occupied} } \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k}) = -2\frac{e}{(2\pi)^3} \int_{\text{occupied} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})   $$

Now we can calculate the current density in different situations:

- Completely filled bands (**insulator**)

$$ \bar{J} = -2\frac{e}{(2\pi)^3} \int_{\text{occupied} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k}) = -2\frac{e}{(2\pi)^3} \int_{1^{st}\text{BZ} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})=0  $$

Where we used the [[Zettelkasten/Basic Mathematics/Green's theorem for periodic functions|Green's theorem for periodic functions]], given that $E_n(\bar{k})$ is periodic over the reciprocal space.
This implies that materials that have Fermi energy just above the maximum of a band must be insulators, because there is no current density.

- Partially filled bands (**conductor**)

$$ \bar{J} = -2\frac{e}{(2\pi)^3} \int_{\text{occupied} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k}) \neq 0  $$



### Criterion to establish if a material is a conductor or an insulator

#### 1-D

Even number of electron $\to$ insulator
Odd number of electron $\to$ conductor

#### 3-D

Even number of electron $\to$ undefined (insulator or conductor)
Odd number of electron $\to$ conductor

Cfr. Bassani-Grassano