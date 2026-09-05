Consider the recursive expression for the wavefunction found in [[Time dependent perturbation theory - the interaction picture]]:

$$
|\psi_I(t)\rangle
=
|\psi_I(t_0)\rangle
-
\frac{i}{\hbar}
\int_{t_0}^{t}
d\tau\,
\hat V_I(\tau)|\psi_I(\tau)\rangle
$$
Supposing that at $t_0$ we have $|\psi_I(t_0)\rangle=|\varepsilon_i\rangle$ and projecting on $\bra{\varepsilon_m}$ we obtain:

$$
\begin{aligned}
c_m(t)\equiv\langle\varepsilon_m|\psi_I(t)\rangle =\delta_{mi}
-\frac{i}{\hbar}\sum_n\int_0^t dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_n\rangle c_n(t').
\end{aligned}
$$

Where we implicitly used $\sum_n|\varepsilon_n\rangle\langle\varepsilon_n|=\hat{\mathbb 1}$.

We can split the sum between the term with $$n=i$$ and the rest:

$$
\begin{aligned}
c_m(t)
&=\delta_{mi}
-\frac{i}{\hbar}\int_0^t dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_i\rangle c_i(t') +\\
&\quad-\frac{i}{\hbar}\sum_{n\ne i}\int_0^t dt'\,
\langle\varepsilon_m|\hat V_I(t')|\varepsilon_n\rangle c_n(t').
\end{aligned}
$$


Then we have after setting$\langle\varepsilon_m| \hat V_I(t) |\varepsilon_n\rangle \equiv  V_{m,n}(t)$ the following system

$$\begin{cases}

c_i(t) =
1 -\frac{i}{\hbar}  
\int_0^t dt',  
V_{i,i}(t')c_i(t')  
-\frac{i}{\hbar}  
\sum_{m\ne i}  
\int_0^t dt',  
V_{i,m}(t')c_m(t'),  
  
\\
c_n(t) =
-\frac{i}{\hbar}  
\int_0^t dt',  
V_{n,i}(t')c_i(t')  
-\frac{i}{\hbar}  
\sum_{m\ne i}  
\int_0^t dt',  
V_{n,m}(t')c_m(t'),  
\qquad (n\ne i).  
\end{cases}  
$$

By substituting recursively and keeping only terms linear in $\hat V_I(t')$:

$$\begin{cases}

c_i(t) =
1 -\frac{i}{\hbar}  
\int_0^t dt',  
V_{i,i}(t')c_i(t')  
+\mathcal O(\hat V_I^2)  
  
\\
c_n(t) =
-\frac{i}{\hbar}  
\int_0^t dt',  
V_{n,i}(t')c_i(t')  
+\mathcal O(\hat V_I^2)\qquad (n\ne i).  
\end{cases}  
$$

As on can show that $V_{i,i}(t') = 0$, in the end we have at the first order the following asymptotic behaviours:

$$ c_i(t) \sim 1 \qquad c_{n\neq i}(t) \sim V$$
