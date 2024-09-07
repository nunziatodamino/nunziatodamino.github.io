## Multilayered metal-dielectric metamaterial

![[Pasted image 20230706151601.png|500]]

Let's consider a periodic structure composed by alternating slabs with composed by material with different dielectric function, say $\varepsilon_1$ and $\varepsilon_2$ and relative filling fractions $f$ and $1-f$ respectively.
The overall system would be anisotropic from a dielectric function point of view, and instead of using a single function to describe its dielectric behavior, one must resort to a tensorial description, in our case, according to anisotropy axis:

$$\stackrel{\leftrightarrow}{\varepsilon}= \varepsilon_0
\begin{Vmatrix}
\varepsilon_{xx} & 0 & 0 \\
0 & \varepsilon_{yy} & 0 \\
0 & 0 & \varepsilon_{zz} \\
\end{Vmatrix}
= \varepsilon_0
\begin{Vmatrix}
\varepsilon_{\parallel} & 0 & 0 \\
0 & \varepsilon_{\parallel} & 0 \\
0 & 0 & \varepsilon_{\perp} \\
\end{Vmatrix}
$$

So that one can write $\bar{D} = \stackrel{\leftrightarrow}{\varepsilon} \bar{E}$.

One can relate the tensor components to the bulk dielectric functions by evaluating the effective fields defined as:

$$ E_{eff} = fE_1+(1-f)E_2 \qquad D_{eff} = fD_1+(1-f)D_2 $$

Where the indexes are referred to the isotropic medium composing the multi layered structure, and then equating the 2, i.e $E_{eff} = E$ and $D_{eff} = D$.
Let's evaluate some cases.

### Electric field parallel to $\varepsilon_{\parallel}$ direction (parallel polarization)

Let's choose for example $\bar{E}= (E,0,0)^T$.
We will have then:

$$\bar{D} = \stackrel{\leftrightarrow}{\varepsilon} \bar{E} =\varepsilon_0 \begin{Vmatrix}
\varepsilon_{\parallel} & 0 & 0 \\
0 & \varepsilon_{\parallel} & 0 \\
0 & 0 & \varepsilon_{\perp} \\
\end{Vmatrix}
\begin{Vmatrix}
E \\ 0\\ 0
\end{Vmatrix}
 = 
\begin{Vmatrix}
\varepsilon_0\varepsilon_{\parallel}E \\ 0\\ 0
\end{Vmatrix}
$$

In this configuration, due to the continuity condition of the Maxwell's equation : $E_1 = E_2 = E$ at the surfaces.
We can then evaluate the averages:

$$ E_{eff} = fE+(1-f)E \qquad D_{eff} = f\varepsilon_0\varepsilon_{1}E+(1-f)\varepsilon_0\varepsilon_{2}E $$

By equating the 2 expression for the $\bar{D}$ field one obtains:

$$\varepsilon_{\parallel}=f\varepsilon_{1}+(1-f)\varepsilon_{2}$$

### Electric field parallel to $\varepsilon_{\perp}$ direction (perpendicular polarization)

Let's choose for example $\bar{E}= (0,0,E)^T$.
We will have then:

$$\bar{D} = \stackrel{\leftrightarrow}{\varepsilon} \bar{E} = \begin{Vmatrix}
\varepsilon_{\parallel} & 0 & 0 \\
0 & \varepsilon_{\parallel} & 0 \\
0 & 0 & \varepsilon_{\perp} \\
\end{Vmatrix}
\begin{Vmatrix}
 0\\ 0 \\ E
\end{Vmatrix}
 = 
\begin{Vmatrix}
 0\\ 0 \\ \varepsilon_0\varepsilon_{\perp}E
\end{Vmatrix}
$$

In this configuration, due to the continuity condition of the Maxwell's equation : $\varepsilon_1E_1 = \varepsilon_2E_2$ at the surfaces, which is equivalent to $D_1 = D_2 = D$
We can then evaluate the averages:

$$ E_{eff} = fE_1+(1-f)E_2 \qquad D_{eff} = fD+(1-f)D $$

By substituting in the first equation:

$$ E_{eff} = f\frac{D}{\varepsilon_1}+(1-f)  \frac{D}{\varepsilon_2} =\frac{D_{eff}}{f+(1-f)}\left( f\frac{1}{\varepsilon_1}+(1-f)\frac{1}{\varepsilon_2}\right) = \left( f\frac{1}{\varepsilon_1}+(1-f)\frac{1}{\varepsilon_2}\right) D_{eff}   $$

By equating the 2 expression for the $\bar{D}$ field one obtains:

$$\varepsilon_{\perp}=\frac{1}{f\frac{1}{\varepsilon_1}+(1-f)\frac{1}{\varepsilon_2}} \qquad \iff \qquad\frac{1}{\varepsilon_{\perp}} =  \frac{f}{\varepsilon_1}+\frac{(1-f)}{\varepsilon_2}$$

## Nanowire metal-dielectric metamaterial

![[Pasted image 20230706151656.png|500]]

The same consideration of before applies, this time we have nanorods of dielectric function $\varepsilon_1$ disposed in a square lattice, immersed in a medium with dielectric function $\varepsilon_2$. This time the dielectric tensor is:

$$\stackrel{\leftrightarrow}{\varepsilon}= \varepsilon_0
\begin{Vmatrix}
\varepsilon_{xx} & 0 & 0 \\
0 & \varepsilon_{yy} & 0 \\
0 & 0 & \varepsilon_{zz} \\
\end{Vmatrix}
= \varepsilon_0
\begin{Vmatrix}
\varepsilon_{\perp} & 0 & 0 \\
0 & \varepsilon_{\perp} & 0 \\
0 & 0 & \varepsilon_{\parallel} \\
\end{Vmatrix}
$$

Let's distinguish the cases:

### Electric field parallel to $\varepsilon_{\parallel}$ direction (parallel polarization)

Let's choose for example $\bar{E}= (0,0, E)^T$.
We will have then:

$$\bar{D} = \stackrel{\leftrightarrow}{\varepsilon} \bar{E} =\varepsilon_0
\begin{Vmatrix}
\varepsilon_{\perp} & 0 & 0 \\
0 & \varepsilon_{\perp} & 0 \\
0 & 0 & \varepsilon_{\parallel} \\
\end{Vmatrix}
\begin{Vmatrix}
 0\\ 0 \\ E
\end{Vmatrix}
 = 
\begin{Vmatrix}
 0\\ 0 \\ \varepsilon_0\varepsilon_{\parallel}E
\end{Vmatrix}
$$

In this configuration, due to the continuity condition of the Maxwell's equation : $E_1 = E_2 = E$ at the nanorods surfaces.
We can then evaluate the averages:

$$ E_{eff} = fE+(1-f)E \qquad D_{eff} = f\varepsilon_0\varepsilon_{1}E+(1-f)\varepsilon_0\varepsilon_{2}E $$

By equating the 2 expression for the $\bar{D}$ field one obtains:

$$\varepsilon_{\parallel}=f\varepsilon_{1}+(1-f)\varepsilon_{2}$$

### Electric field parallel to $\varepsilon_{\perp}$ direction (perpendicular polarization)

The expression in this case is difficult to derive, and we state it without proof:

$$ \varepsilon_{\perp} = \varepsilon_1 \frac{(1+f)\varepsilon_2+ (1-f)}{(1-f)\varepsilon_2+ (1+f)} $$

We report all our considerations in a recap table:

![[Pasted image 20230707110926.png|500]]

