
## 1-D waves

One possible solution of the wave equation in one dimension:

$$ \frac{\partial^2 \phi}{\partial x^2}- \frac{1}{v^2}\frac{\partial^2 \phi}{\partial t^2} = 0 $$

Is the well known:

$$ \phi(x,t) = A\exp(i(kx-\omega t)) $$

As one can prove easily by substitution, by of course making the position $k = \frac{\omega}{v} \to v = \frac{\omega}{k}$.
Another interesting g to note is that $kx$ and $\omega t$ must be, as arguments of the complex exponential, must satisfy a $2\pi$ periodicity, namely:

$$ k\lambda = 2 \pi \qquad \omega T = 2 \pi $$

## 3-D waves

Generally in 3 dimensions we are interested in 2 types of waves: plane and spherical.
Whatever the wave, they will satisfy the D'Alembert equation:

$$ \nabla^2 \phi- \frac{1}{v^2}\frac{\partial^2 \phi}{\partial t^2} = 0  $$
### Plane waves

These waves are of the form:

$$ \phi (\bar{r}, t) =A\exp(i(\bar{k} \cdot \bar{r}-\omega t))$$

Let's prove this wave has indeed a plane wavefront. 

For $t=0$ the function $\phi$, i.e. the wave, as the same value for all the point in space for which $\bar{k} \cdot \bar{r} = \mbox{constant} \to k_xx+k_yy+k_zz = \mbox{constant}$ , which is the implicit form for the equation of a plane in 3 dimensions.
Moreover, because in this form  the wave vector is the director vector of the plane, the wave propagation is always orthogonal to the wavefront:

![[plane_wave.png]]

### Spherical waves

These waves are of the form:

$$ \phi (\bar{r}, t) =A\exp(i(kr-\omega t)) \qquad \mbox{expanding from the origin} $$

$$ \phi (\bar{r}, t) =A\exp(-i(kr-\omega t)) \qquad \mbox{collapsing into the origin} $$

Let's prove this wave has indeed a spherical wavefront. 
With the same reasoning as before, for $t=0$ the function $\phi$, i.e. the wave, as the same value for all the point in space for which $kr = \mbox{constant} = C \to x^2 + y^2 + z^2 = \frac{C^2}{k^2}$, that is a the equation of a sphere, centered in the origin.

![[spherical_wave.png]]


## Vector waves

We are now interested in modeling the oscillations of a vector in space.
Again, we set the appropriate D'Alembert equation:

$$ \nabla^2 \bar{E}- \frac{1}{v^2}\frac{\partial^2 \bar{E}}{\partial t^2} = 0  $$

Again the main cases of interest are the plain wave form and the spherical one.

Let's for example consider the plane wave form:

$$ \bar{E} (\bar{r}, t) =\bar{E}_0 \exp(i(\bar{k} \cdot \bar{r}-\omega t)) $$

Note that now the amplitude vector $\bar{E}_0$ and the wavevector $\bar{k}$ are now independent, and their mutual position constitutes the so called wave polarization, so that is implicit that we can talk about polarization only in vector waves. 

#### Polarization

With the concept of polarization we can classify the waves in :

- Longitudinal wave : If $\bar{E}_0 = E_0 \hat{k}$ (also called longitudinal polarization)
- Transverse wave : If $\bar{E}_0 \cdot \hat{k} =0$ (also called transverse polarization)

Moreover we further classify the transverse waves in subcategories:

- Linear polarization : $\bar{E}_0 = E_0 \hat{n} : \hat{n} \cdot \hat{k} =0$ , that is to say the amplitude vector is fixed in direction
- Circular polarization
- Elliptical polarization

