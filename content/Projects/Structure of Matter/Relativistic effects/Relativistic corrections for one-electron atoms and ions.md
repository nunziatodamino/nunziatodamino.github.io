Let's start from the [[Stationary equation of a charged particle]] with the additional assumption that $q = -e$ and $\bar A = 0$.
So given the wavefunction:

$$  
\Psi(\bar r,t)=\chi(\bar r)e^{-iEt/\hbar},  
\qquad  
\chi(\bar r)=  
\begin{pmatrix}  
\varphi(\bar r) \\  
\eta(\bar r)  
\end{pmatrix}.  
$$

The spinor component satisfied

$$
\begin{pmatrix}  
(-e\Phi(r)+mc^2)\mathbb{1}_2 & c(\bar\sigma\cdot\hat{\bar p}) \\  
c(\bar\sigma \cdot \hat{\bar p} ) & (-e\Phi(r)-mc^2)\mathbb{1}_2  
\end{pmatrix}  
\begin{pmatrix}  
\varphi(\bar r) \\  
\eta  (\bar r)
\end{pmatrix} = E 
\begin{pmatrix}  
\varphi(\bar r) \\  
\eta  (\bar r)
\end{pmatrix}
$$

Then we perform the shift:

$$ (\hat{\mathscr{H}_D} -mc^2 \mathbb{1}_4) \begin{pmatrix}  
\varphi(\bar r) \\  
\eta  (\bar r) 
\end{pmatrix} = (E -mc^2 \mathbb{1}_4) \begin{pmatrix}  
\varphi(\bar r) \\  
\eta  (\bar r) 
\end{pmatrix}$$

Leading to :

$$
\begin{pmatrix}  
-e\Phi( r)\mathbb{1}_2 & c(\bar\sigma\cdot\hat{\bar p}) \\  
c(\bar\sigma \cdot \hat{\bar p} ) & (-e\Phi(\bar r)-2mc^2)\mathbb{1}_2  
\end{pmatrix}  
\begin{pmatrix}  
\varphi(\bar r) \\  
\eta  (\bar r)
\end{pmatrix} = E' 
\begin{pmatrix}  
\varphi(\bar r) \\  
\eta  (\bar r)
\end{pmatrix}
$$

Where clearly $E' = E - mc^2$. (Hence once solved the wavefunction will be $\Psi(\bar r,t)=\chi(\bar r)e^{-iEt/\hbar} =\chi(\bar r)e^{-i(E' + mc^2)t/\hbar} = \chi(\bar r)e^{-iE't/\hbar}e^{-imc^2t/\hbar}$)

The equation is equivalent to the system (in mixed representation):

$$
\begin{cases}
-e\Phi( r)\mathbb\varphi(\bar r) - i\hbar c(\bar\sigma\cdot \bar \nabla)\eta(\bar r) = E' \varphi(\bar r) \\
- i\hbar c(\bar\sigma\cdot \bar \nabla)\varphi(\bar r) - (e\Phi(r)+ 2mc^2)\mathbb\eta(\bar r) = E' \eta(\bar r)
\end{cases}
$$

From the second equation we obtain:

$$\eta(\bar r) = \frac{- i\hbar c}{E'+ e\Phi(r)+ 2mc^2}(\bar\sigma\cdot \bar \nabla)\varphi(\bar r) $$

Then plugging this in the first one we obtain:

$$-e\Phi\mathbb\varphi(\bar r) - i\hbar c(\bar\sigma\cdot \bar \nabla)\left[ \frac{- i\hbar c}{E'+ e\Phi(r)+ 2mc^2}(\bar\sigma\cdot \bar \nabla)\varphi(\bar r) \right] = E' \varphi(\bar r)$$

Before continuing is better to consider some approximations. 
Start by considering:

$$\frac1{E'+ e\Phi(r)+ 2mc^2} = \frac1{2mc^2} \frac1{ 1 + \frac{E' -V(r)}{2mc^2}} \sim \frac1{2mc^2} \left( 1 - \frac{E' -V(r)}{2mc^2} \right)$$

Where the approximation $\frac1{1+x} \sim 1 - x$ is valid form small $x$, hence in our case $\left| \frac{E' -V(r)}{2mc^2}\right| \ll 1$ i.e. both the potential and the energy are small respect to the rest energy. (non-relativistic approximation):
Then we have in this approximation:

$$
\begin{aligned}

V(r)\varphi(\bar r) - i\hbar c(\bar\sigma\cdot \bar \nabla)\left[ \frac{-i \hbar c}{2mc^2} \left( 1 - \frac{E' -V( r)}{2mc^2} \right)(\bar\sigma\cdot \bar \nabla)\varphi(\bar r) \right] = E' \varphi(\bar r) \\

V(r)\varphi(\bar r) - \frac{\hbar^2}{2m} \left[(\bar\sigma\cdot \bar \nabla)\left( 1 - \frac{E' -V(\bar r)}{2mc^2} \right)(\bar\sigma\cdot \bar \nabla)\varphi(\bar r) + \left( 1 - \frac{E' -V(r)}{2mc^2} \right)(\bar\sigma\cdot \bar \nabla)^2\varphi(\bar r) \right] = E' \varphi(\bar r) \\

V(r)\varphi(\bar r) - \frac{\hbar^2}{2m} \left[\frac1{2mc^2}(\bar\sigma\cdot \bar \nabla)V(r)(\bar\sigma\cdot \bar \nabla)\varphi(\bar r) + \left( 1 - \frac{E' -V(r)}{2mc^2} \right)(\bar\sigma\cdot \bar \nabla)^2\varphi(\bar r) \right] = E' \varphi(\bar r) \\

V(r)\varphi(\bar r) - \frac{\hbar^2}{4m^2c^2}(\bar\sigma\cdot \bar \nabla)V(r)(\bar\sigma\cdot \bar \nabla)\varphi(\bar r) - \frac{\hbar^2}{2m} \left( 1 - \frac{E' -V(r)}{2mc^2} \right)(\bar\sigma\cdot \bar \nabla)^2\varphi(\bar r)  = E' \varphi(\bar r) \\

\end{aligned}
$$


Now we simplify by using the [[Pauli vector dot product identity]]:

$$
\begin{aligned}
(\bar\sigma\cdot \bar \nabla)^2 &= \nabla^2 + i \bar \sigma \cdot (\bar\nabla \wedge \bar\nabla) = \nabla^2 \\
(\bar\sigma\cdot \bar \nabla V)(\bar\sigma\cdot \bar \nabla\varphi) &= \bar \nabla V \cdot \bar \nabla\varphi + i \bar \sigma \cdot (\bar \nabla V \wedge \bar \nabla\varphi)
\end{aligned}
$$

And also use the fact that the potential is central, so that in spherical coordinates is symmetric:

$$\bar \nabla V(r) = \frac\partial{\partial r} V(r) \hat{u}_r = \frac1{r} \frac{d}{dr} V(r) \bar r$$

So in the dot product only the radial component survives:

$$\bar \nabla V(r) \cdot \bar \nabla\varphi(\bar r) =  \frac{dV}{dr}\frac{\partial \varphi}{\partial r}$$

Finally, the cross product is :

$$
\begin{aligned}
i \bar \sigma \cdot \left(\bar \nabla V \wedge \bar \nabla\varphi\right) &= i \bar \sigma \cdot \left(\frac1{r} \frac{d}{dr} V(r) \bar r \wedge \bar \nabla\varphi\right) = -\frac1{\hbar r} \frac{dV(r)}{dr}\sigma \cdot \left(\bar r \wedge (-i\hbar\bar \nabla\varphi)\right) = \\
&=-\frac1{\hbar r} \frac{dV(r)}{dr}\sigma \cdot \left(\bar r \wedge (-i\hbar\bar \nabla)\right) \varphi = -\frac1{\hbar r} \frac{dV(r)}{dr}(\sigma \cdot \hat{\bar L}) \varphi = \\
&= -\frac2{\hbar^2 r} \frac{dV(r)}{dr}(\hat{\bar S} \cdot \hat{\bar L}) \varphi
\end{aligned}
$$

In the end we can write

$$V(r)\varphi(\bar r) - \frac{\hbar^2}{4m^2c^2}\left[ \frac{dV}{dr}\frac{\partial \varphi}{\partial r} -\frac2{\hbar^2 r} \frac{dV(r)}{dr}(\hat{\bar S} \cdot \hat{\bar L}) \varphi \right] - \frac{\hbar^2}{2m} \left( 1 - \frac{E' -V(r)}{2mc^2} \right)\nabla^2\varphi(\bar r)  = E' \varphi(\bar r)$$
