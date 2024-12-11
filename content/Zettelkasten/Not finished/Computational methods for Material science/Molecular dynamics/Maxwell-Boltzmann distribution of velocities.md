We start from:

$$ f(v)d^3v = \left[ \frac{m}{2 \pi k_B T} \right]^{3/2}\exp\left(- \frac{mv^2}{2k_BT} \right)d^3v $$

We have 2 choices to write the volume element $d^3v$.
Or we use Cartesian coordinates $d^3v=dv_xdv_ydv_z$, or we can use spherical coordinates $d^3v=|J|dvd\vartheta d\varphi =v^2\sin \vartheta dvd\vartheta d\varphi=v^2 dv d\Omega$

- Using the first choice, by writing $v^2=v_x^2+v_y^2+v_z^2$:

$$ 
\begin{aligned} 
f(v_x,v_y,v_z)dv_xdv_ydv_z &= \left[ \frac{m}{2 \pi k_B T} \right]^{3/2}\exp\left(- \frac{m(v_x^2+v_y^2+v_z^2)}{2k_BT} \right)dv_xdv_ydv_z = \\
&= \left[ \frac{m}{2 \pi k_B T} \right]^{3/2}\exp\left(- \frac{mv_x^2}{2k_BT} \right)\exp\left(- \frac{mv_y^2}{2k_BT} \right)\exp\left(- \frac{mv_z^2}{2k_BT} \right)dv_xdv_ydv_z 
\end{aligned} $$

So that we can write $f(v_x,v_y,v_z)dv_xdv_ydv_z =f(v_x)dv_xf(v_y)dv_yf(v_z)dv_z$ and extract the probability distribution for a single velocity component:

$$ f(v_x)dv_x =  \left[ \frac{m}{2 \pi k_B T} \right]^{1/2}\exp\left(- \frac{mv_x^2}{2k_BT}\right)dv_x $$

Note that this probability distribution is Gaussian.
One can obtain the distribution for all the 3 components of the velocities by multiplying these distribution to obtain another Gaussian:


$$ f(v_x,v_y,v_z)dv_xdv_ydv_z = \left[ \frac{m}{2 \pi k_B T} \right]^{3/2}\exp\left(- \frac{m(v_x^2+v_y^2+v_z^2)}{2k_BT} \right)dv_xdv_ydv_z$$

- If one instead want to find a distribution for the velocity modulus (in the English literature called speed), one has to take the expression in spherical coordinates for the element volume:

$$  f(v)v^2 dv d\Omega = \left[ \frac{m}{2 \pi k_B T} \right]^{3/2}\exp\left(- \frac{mv^2}{2k_BT} \right)v^2 dv d\Omega  $$

And then we have to integrate both sides over the solid angle. Given that $f(v)$ has spherical symmetry, $\int d\Omega =4\pi$ , so that:

$$  f(v)4\pi v^2 dv  = \left[ \frac{m}{2 \pi k_B T} \right]^{3/2}\exp\left(- \frac{mv^2}{2k_BT} \right)4 \pi v^2 dv   $$

So, by redefining $g(v)\equiv  f(v)4\pi v^2$, we obtain:

$$g(v) dv  = \left[ \frac{m}{2 \pi k_B T} \right]^{3/2}\exp\left(- \frac{mv^2}{2k_BT} \right)4 \pi v^2 dv   $$

Which is what we intend usually as the **Maxwell-Boltzmann distribution**