
A consequence of the [[Projects/Numerical methods for soft matter/Molecular dynamics/Ensemble mean equivalence|equivalence of ensembles]] is that, provided a suitable phase function can be identified in each case, the basic thermodynamic properties of a model system may be calculated as averages in any convenient ensemble. Accordingly, we give in this section expressions for common thermodynamic quantities, omitting the subscripts which identify particular ensembles.
### Energy 

>[!iinfo]  **Energy**
>We have simply :
>
$$ E = \langle H \rangle = \langle K \rangle + \langle V \rangle $$
>
Where moreover, in the case of a particle system we can write:
>
$$ \langle K \rangle = \langle \frac{1}{2}\sum_i \frac{p_i^2}{2m_i} \rangle = \frac{3}{2} Nk_BT $$

Where this result is known as the equipartition theorem.
For the potential energy there is no set strategy, and the functional form depends on the type of interaction between the particles.

### Temperature

>[!info] **Temperature**
>
We can define for a system an instantaneous temperature as :
>
$$ T(t) = \frac{2K(t)}{3Nk_B} $$
>
In this way, if take the mean of this observable, we obtain T.

### Pressure 

>[!iinfo] **Pressure** 
>Is evaluated by the virial theorem:
>
$$ PV = Nk_BT + \frac{1}{3} \langle \sum_{i=1}^N \bar{r}_i \cdot \bar {F}_i\rangle $$
>
Note that we can consider this expression composed of 2 terms : one ideal gas term (i.e. when no interaction are present)
and one interaction term due to the virial sum.

**Proof**  In a system of N particles we call $\bar{F}_i^{tot} = \bar{F}_{i} + \bar{F}_{i}^w$, where $\bar{F}_{i}$ is due the force due to the interaction with all the other particles in the system (i.e. for pair interaction $\bar{F}_{i} = \sum_{j \neq i} \bar{F}_{ij}$  ) , while $\bar{F}_{i}^w$ arises from the interaction with the walls of the container. Then, by the definition of work:

$$ W = \sum_i \bar{r}_i \cdot \bar{F}_{i}^{tot} = \sum_i \bar{r}_i \cdot \bar{F}_{i} + \sum_i \bar{r}_i \cdot \bar{F}_{i}^w  $$

Then we take the average:

$$ \langle W \rangle = \langle \sum_i \bar{r}_i \cdot \bar{F}_{i} \rangle + \langle \sum_i \bar{r}_i \cdot \bar{F}_{i}^w \rangle $$

Now we show that:
 
 - $\langle W \rangle = -3Nk_BT$
	This can be done by definition of time average, and by using the second law of dynamics:
	
	$$ \langle W \rangle = \lim_{t \to +\infty} \frac{1}{t} \int_0^t \sum_i \bar{r}_i \cdot \bar{F}_{i}^{tot} dt' = \lim_{t \to +\infty} \frac{1}{t} \int_0^t \sum_i \bar{r}_i(t') \cdot m \bar{a}_i(t') dt'  $$
	
	Here we integrate by parts ( $f = \bar{r}_i(t')$, $g' = m \bar{a}_i(t')$):
	
	$$\begin{aligned} 
	\langle W \rangle &= \lim_{t \to +\infty} \frac{1}{t} \left[ \sum_i[\bar{r}_i\cdot \bar{p}_i]_0^t - \int_0^t \sum_i \bar{v}_i(t') \cdot m \bar{v}_i(t') dt' \right] = \\
	&= -\lim_{t \to +\infty} \frac{1}{t} \int_0^t \sum_i m \bar{v}^2_i(t') dt' = -2\langle K \rangle  = -3Nk_BT
	
	\end{aligned}$$
	
	Where we use in the second to last equality the time average definition.

- $\langle \sum_i \bar{r}_i \cdot \bar{F}_{i}^w \rangle = -3PV$
	Consider a rectangular parallepiped container with sides of length $L_x , L_y ,L_z$ . We assume that the force $\bar{F}_{i}^w$ is always perpendicular to the sides; then:
	
	$$ \langle \sum_i \bar{r}_i \cdot \bar{F}_{i}^w \rangle = L_x\langle \bar{F}_{ix}^w \rangle + L_y\langle \bar{F}_{iy}^w \rangle  +L_z\langle \bar{F}_{iz}^w \rangle $$
	
	Each wall force is related to the pressure respect to the relative direction:
	
	$$ \langle \sum_i \bar{r}_i \cdot \bar{F}_{i}^w \rangle = L_x(-PL_zL_y) \rangle + L_y(-PL_zL_x) \rangle  +L_z(-PL_xL_y) $$
	
	So that in total one has:
	
	$$ \langle \sum_i \bar{r}_i \cdot \bar{F}_{i}^w \rangle = -3PL_xL_y L_z = -3PV $$

Finally, if we put all together:

$$ -3Nk_BT = \langle \sum_i \bar{r}_i \cdot \bar{F}_{i} \rangle -3PV \iff PV = Nk_BT + \frac{1}{3} \langle \sum_{i=1}^N \bar{r}_i \cdot \bar {F}_i\rangle  $$

>[!info] **Pressure in case of pair potential interaction**
Notice that the if the force come from a pair interaction potential $V$ :
>
$$ PV = Nk_BT - \frac{1}{3} \langle \sum_{i<j} \bar{r}_{ij} \cdot \frac{\partial V}{\partial \bar{r}_{ij}} \rangle $$

**Proof** If the the force comes from a pair interaction potential then  $\bar{F}_{i} = \sum_{j \neq i} \bar{F}_{ij}$. by considering just the virial term we obtain

$$\langle \sum_{i=1}^N \bar{r}_i \cdot \sum_{j\neq i}\bar {F}_{ij}\rangle = \langle \sum_{i=1}^N\sum_{j\neq i} \bar{r}_i \cdot \bar {F}_{ij}\rangle = \frac{1}{2}\langle \sum_{i=1}^N\sum_{j\neq i} \bar{r}_i \cdot \bar {F}_{ij} + \bar{r}_j \cdot \bar {F}_{ji}\rangle$$

The second equality follows because the indices $i$ and $j$ are equivalent (invariance by choice of particle). Now if we consider Newton's $3^{rd}$ law :

$$ \frac{1}{2}\langle \sum_{i=1}^N\sum_{j\neq i} \bar{r}_i \cdot \bar {F}_{ij} + \bar{r}_j \cdot \bar {F}_{ji}\rangle = \frac{1}{2}\langle \sum_{i=1}^N\sum_{j\neq i} \bar{r}_i \cdot \bar {F}_{ij} - \bar{r}_j \cdot \bar {F}_{ij}\rangle = \frac{1}{2}\langle \sum_{i=1}^N\sum_{j\neq i} \bar{r}_{ij} \cdot \bar {F}_{ij}\rangle =  \langle \sum_{j> i} \bar{r}_{ij} \cdot \bar {F}_{ij}\rangle  $$

Where the last is a double sum and $\bar{r}_{ij} = \bar{r}_{i} - \bar{r}_{j}$. Lastly to relate the force to the potential we simply consider its gradient $\bar{F}_{ij} = -\bar{\nabla}_{\bar{r}_{ij}}V(r_{ij})$, to obtain the expression we wanted to prove.

### Mean square displacement (MSD)

>[!info] **Mean square displacement (MSD)**
Given the position of a particle at all times, we can evaluate the MSD:
>
$$ \langle\Delta\bar{r}^2(\tau)\rangle = \langle (\bar{r}(\tau + t_0) - \bar{r}(t_0))^2 \rangle = \frac{1}{N} \sum_{i=1}^N (\bar{r}_i(\tau + t_0) - \bar{r}_i(t_0))^2 $$
>
Where the average is the ensemble average and $\tau$ is called time lag. 

Usually we aim to set $t_0 = 0$ and $\bar{r}_i(t_0) = 0, \ \forall i$ in order to simplify calculations.

### Diffusion coefficient

The Stokes-Einstein relation relates the MSD with the diffusion coefficient for different lag times:

$$ \langle\Delta\bar{r}^2(\tau)\rangle = 2dD\tau $$

Where $d$ is the system dimensionality.
Then we have different ways to evaluate $D$.

- Naive method - Considering the relation:

	$$ D = \lim_{t \to +\infty} \frac{\langle\Delta\bar{r}^2(t)\rangle}{2dt}$$
	
	Then if we have the MSD for an high lag time, we perform this division to obtain the diffusion coefficient.

- Fit method - In the MSD - time plot we perform a linear fit. Then the line has slope $2dD$, from which we can evaluate the diffusion coefficient. Suppose we are in a regime where the diffusion is not linear. Then we define the parameter $\mu$ (mobility) such that $$ \langle\Delta\bar{r}^2(\tau)\rangle = \mu\tau^{\alpha} $$
	In this case the fit will be polynomial

- Green-Kubo Formula - 

>[!info] **Green-Kubo formula**
>We can relate the diffusion coefficient to the velocity auto-correlation function: 
>
$$ D = \frac{1}{3} \int_0^t \langle v(\tau +t_0)v(t_0)d \rangle d\tau $$

### Radial density function (RDF)