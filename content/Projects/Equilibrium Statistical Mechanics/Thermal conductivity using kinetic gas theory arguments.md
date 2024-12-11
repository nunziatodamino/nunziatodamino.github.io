We want to relate the thermal conductivity coefficient in [[Fourier's law]] to more fundamental parameters of an ideal gas. 
A more rigorous proof can be given, but its complications are of little use in understanding the physics behind the process, so a simplified version will be given.

![[Images/Thermal conductivity using kinetic gas theory arguments.png|300]]

Let's consider an ideal gas in which a temperature field dependent only on $z$ is established. While preposterous as hypothesis in general, this can be a good approximation in systems in which the height $z$ is way larger than the width.
Considering $n = \frac{N}{V}$ as the particle number density, we can say the following: due to the isotropy hypothesis, on average $1/3$ of the particle will move along the $z$ axis (and of course $1/3$ along the $x$ axis and $1/3$ along the $y$ axis ).
Moreover for each axis half will go on average in one direction, say for the $z$ axis $1/2$ of $1/3$ will go up and the same fraction will go down. (one can derive this number in a formal way by considering a particle in the plane below the reference one, then one has to average over the space in spherical coordinates. It will appear in the calculations the integral of $\cos^2 \vartheta$ over the space, which gives $1/6$).
Now we consider a reference plane at height $z$ and 2 planes above and below at a mean free path $\lambda$ distance. We do this because in this way we are certain that particle between these planes will interact on average.
Now we want to evaluate the average number density of particles per unit area and per unit time that passes in the reference plane. We consider the case for the plane below, the one for the plane above is the same for symmetry.
We have that particles within a volume $dV_c$ will pass trough the unit area. Moreover this critical volume can be evaluated by considering :

$$dV_c = dA \braket{v} dt \qquad \iff \qquad \frac{dV_c}{dAdt}=\braket{v} \quad \text{fraction of particles that passes trough the unit area per unit time}$$

So the average number density of particles per unit area and per unit time is simply the number of particles trough that direction times this fraction:

$$ \bar{n} = \frac{1}{6}n\braket{v} $$

Now we are ready to evaluate the heat flux, by taking the difference between the energy from below, which will be the average number density times the respective internal energy, and the the energy from above:

$$J = \frac{1}{6}n\braket{v}U(z-\lambda)-\frac{1}{6}n\braket{v}U(z+\lambda) = \frac{1}{6}n\braket{v}\left[U(z-\lambda)-U(z+\lambda)\right]  $$

Finally we can expand the internal energy and stop at the first order:

$$J \simeq \frac{1}{6}n\braket{v}\left[U(z)-\lambda\frac{\partial U(z)}{\partial z}-U(z)-\lambda\frac{\partial U(z)}{\partial z}\right] = \frac{1}{3}n\lambda\braket{v}\frac{\partial U(z)}{\partial z}= \frac{1}{3}n\lambda\braket{v}\frac{\partial U(z)}{\partial T}\frac{\partial T}{\partial z} $$

So that finally, by comparing this expression with Fourier's law we obtain an expression for thermal conductivity

$$\kappa =\frac{1}{3}n\lambda\braket{v}\frac{\partial U(z)}{\partial T}= \frac{1}{3V}C_V\lambda\braket{v} $$

Where we implicitly used that $\frac{\partial U(z)}{\partial T}$ is the heat capacity per molecule, so the total heat capacity is $N\frac{\partial U(z)}{\partial T}=C_V$.
One can in principle derive also an equivalent expression that is not dependent on the mean free path, but on the mean collision time $\tau$. By considering that $\lambda = \braket{v}\tau$, we can rewrite the expression as:

$$\kappa =\frac{1}{3V}C_Vn\tau\braket{v}^2 $$








