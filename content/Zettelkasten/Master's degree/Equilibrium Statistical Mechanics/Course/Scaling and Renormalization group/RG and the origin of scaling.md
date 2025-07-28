Consider a system in which $[K] = (K_1, K_2) = (T,H)$.
If we apply a RG transformation:

$$ [K'] = \mathscr{R}_l[K]$$

Then to this correspond the set of equations:

$$ 
\begin{cases}
K'_1 = (\mathscr{R}_l[K])_1 \\
K'_2 = (\mathscr{R}_l[K])_2 \\
\end{cases} 
\qquad
\begin{cases}
T' = \mathscr{R}^T_l(T,H) \\
H' = \mathscr{R}^H_l(T,H) \\
\end{cases} 
$$

Where we used 2 possible conventions one can find in literature.
Then, if one consider a fixed point $[K^*] = \mathscr{R}_l[K^*]$ the equation associated to this are simply:

$$ 
\begin{cases}
K^{*}_1 = (\mathscr{R}_l[K^*])_1 \\
K^{*}_2 = (\mathscr{R}_l[K^*])_2 \\
\end{cases} 
\qquad
\begin{cases}
T^* = \mathscr{R}^T_l(T^*,H^*) \\
H^* = \mathscr{R}^H_l(T^*,H^*) \\
\end{cases} 
$$

Note that the fixed point can be [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Classification of fixed points in RG theory|either]] trivial or critical. We suppose in this discussion to be critical, so that $\xi([K^*]) =\xi(T^*,H^*) =\infty$.
Consider now the quantity:

$$ \delta\bar{K} = \bar{K} - \bar{K}^*  $$

And finally we consider the application of operator $\Pi$ to this vector, i.e. we are considering the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Linearization of RG close to the fixed points and critical exponents|Linearization of RG close to the fixed points and critical exponents]]. We have:

$$ \delta\bar{K}' = \Pi \delta\bar{K} $$

Now, consider the base in which the matrix is diagonal, so that its diagonal contain its eigenvalues:

$$ \Pi = 
\begin{pmatrix}
\lambda^T_l &0\\
0 & \lambda^H_l
\end{pmatrix}  =
\begin{pmatrix}
l^{y_T} &0\\
0 & l^{y_H}
\end{pmatrix}
$$

So that we obtain for 1 decimation:

$$
\begin{cases}
t' =l^{y_T}t \\
h' =l^{y_H}h
\end{cases}
$$

**Note that $(t,h)$ and $(t',h')$ are respectively the representation of $\delta\bar{K}$ and $\delta\bar{K}'$ in the basis in which the Jacobian is diagonal.**
Iterating for $n$ decimations one obtains:

$$
\begin{cases}
t^{(n)} =l^{ny_T}t \\
h^{(n)} =l^{ny_H}h
\end{cases}
$$

On the other hand, if we connect the correlation length after $n$ decimation:

$$ \xi(t,h) =l^n\xi(t^{(n)},h^{(n)}) = l^n\xi(l^{ny_T}t,l^{ny_H}h) $$

If we now set $h=0$ and choose $l$, as is arbitrary, as $l^{ny_T}t = b \gg 1$:

$$ \xi(t,0) = \left(\frac{t}{b}\right)^{-\frac{1}{y_T}}\xi(b,0) $$

So, approaching $t\to 0$, we have $\xi \sim t^{-\nu}$, so we conclude:

$$\nu = \frac{1}{y_T}$$

This is important as, while seems equivalent to the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Kadanoff argument|Kadanoff argument]] there is a major difference, **that here we can evaluate explicitly $y_T$. while in Kadanoff theory we cannot.**
In fact, once we know the transformation and we have found the eigenvalue, simply by inversion :

$$ \lambda^T_l  = l^{y_T} \iff y_T = \frac{\ln \lambda^T_l}{\ln l}$$

We can find a similar expression for the free energy. As we shown in general for a [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/RG transformation|RG transformation]] that $f([K]) = l^{-nd}f([K'])$, then for $n$ transformations

$$f(t,h) = l^{-nd}f(l^{ny_T}t,l^{ny_H}h)$$

If we again we choose as scale of our decimation $l$ such that $l^{ny_T}t = b \gg 1$: 

$$f(t,h) = \left(\frac{t}{b}\right)^{\frac{d}{y_t}}f\left(b,  \left(\frac{b}{t}\right)^{y_H/y_T}h\right)$$

Now if we call $\Delta = y_H/y_T$, observe that $\nu = \frac{1}{y_T}$ we have:

$$f(t,h) = {b}^{-{\nu d}}{t}^{\nu d}f\left(b,  b^{\Delta}\frac {h}{t^{\Delta}}\right)$$

If we compare this to the critical behavior of the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Widom's scaling hypothesis|Widom's scaling hypothesis]] we obtain a proper justification for the hyperscaling relation:

$$ 2-\alpha = \nu d  $$

