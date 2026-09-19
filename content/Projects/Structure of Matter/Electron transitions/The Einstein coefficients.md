Considering the [[Absorption and emission rates respect the DOS]] we can define the so called **Einstein coefficients**: 
$$
\begin{aligned}
W_{b\to a}^{(\mathrm{spont})}
&=
A_{ba}
\\
W_{b\to a}^{(\mathrm{stim})}
&=
B_{ba}\rho(\omega_{ba}),
\\
W_{a\to b}^{(\mathrm{abs})}
&=
B_{ab}\rho(\omega_{ba}).
\end{aligned}
$$

For two nondegenerate atomic levels,

$$
B_{ab}=B_{ba}\equiv B.
$$

The microscopic expressions obtained above give

$$
\boxed{
A_{ba}
=
\frac{\omega_{ba}^3}
{3\pi\varepsilon_0\hbar c^3}
|\bar d_{ba}|^2
}
\qquad
\boxed{
B
=
\frac{\pi}
{3\varepsilon_0\hbar^2}
|\bar d_{ba}|^2
}.
$$

Therefore,

$$
\boxed{
\frac{A_{ba}}{B}
=
\frac{\hbar\omega_{ba}^3}
{\pi^2c^3}
}.
$$

### **Einstein coefficient ratio from thermal equilibrium argument**

This relation can also be derived from thermal equilibrium.
Consider $N$ atoms, each of which may occupy one of two nondegenerate levels $A$ and $B$, with

$$
\varepsilon_b-\varepsilon_a
=
\hbar\omega_{ba}>0.
$$

Let

$$
N=N_a+N_b,
$$

where $N_a$ and $N_b$ are the populations of the lower and upper levels.

The population $N_a$ increases through spontaneous and stimulated emission and decreases through absorption:

$$
\begin{aligned}
\frac{dN_a}{dt}
&=
W_{b\to a}^{(\mathrm{spont})}N_b
+
W_{b\to a}^{(\mathrm{stim})}N_b
-
W_{a\to b}^{(\mathrm{abs})}N_a=
A_{ba}N_b
+
B\rho(\omega_{ba})N_b
-
B\rho(\omega_{ba})N_a.
\end{aligned}
$$

At thermal equilibrium,

$$
N_a
=
N
\frac{e^{-\beta\varepsilon_a}}
{Z_2},
\qquad
N_b
=
N
\frac{e^{-\beta\varepsilon_b}}
{Z_2},
$$

where $Z_2=e^{-\beta\varepsilon_a}+e^{-\beta\varepsilon_b}.$
The ratio of the populations is

$$
\begin{aligned}
\frac{N_a}{N_b}
&=
e^{-\beta(\varepsilon_a-\varepsilon_b)}=
e^{\beta\hbar\omega_{ba}}.
\end{aligned}
$$

At stationarity,

$$
\frac{dN_a}{dt}=0.
$$

Therefore,

$$
\left[
A_{ba}
+
B\rho(\omega_{ba})
\right]N_b
=
B\rho(\omega_{ba})N_a.
$$

Dividing by $N_b$ gives

$$
A_{ba}
+
B\rho(\omega_{ba})
=
B\rho(\omega_{ba})
\frac{N_a}{N_b}.
$$

Using the thermal population ratio,

$$
A_{ba}
+
B\rho(\omega_{ba})
=
B\rho(\omega_{ba})
e^{\beta\hbar\omega_{ba}}.
$$

Hence,

$$
A_{ba}
=
B\rho(\omega_{ba})
\left(
e^{\beta\hbar\omega_{ba}}-1
\right).
$$

Solving for the spectral energy density,

$$
\rho(\omega_{ba})
=
\frac{A_{ba}/B}
{e^{\beta\hbar\omega_{ba}}-1}.
$$

Planck's distribution is

$$
\rho(\omega)
=
\frac{\hbar\omega^3}
{\pi^2c^3}
\frac{1}
{e^{\beta\hbar\omega}-1}.
$$

Comparing the two expressions gives

$$
\boxed{
\frac{A_{ba}}{B}
=
\frac{\hbar\omega_{ba}^3}
{\pi^2c^3}
}.
$$
