Consider the expression
$$
\mathcal{H}
=\int d\bar{r}\left(\frac{1}{2}\,\varepsilon_0\,\bar{E}^{\,2}+\frac{1}{2\mu_0}\,\bar{B}^{\,2}\right).
$$

Under the Coulomb gauge $\left(\bar{\nabla}\cdot\bar{A}=0\right)$ so that
$$
\begin{cases}
\bar{E}=-\partial_t\bar{A},\\
\bar{B}=\bar{\nabla}\wedge \bar{A}.
\end{cases}
$$

We recall that $\bar{A}(\bar{r},t)$ can be in general written as
$$
\bar{A}(\bar{r},t)
=\frac{1}{\sqrt{V}}\sum_{\bar{k}}\sum_{s}\hat{\bar{\epsilon}}_{\bar{k},s}
\left[
A_{\bar{k},s}\,e^{i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
+
A_{\bar{k},s}^{*}\,e^{-i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
\right].
$$

## Evaluate the fields

First we evaluate the fields.

$$
\bar{E}(\bar{r},t)
=-\partial_t\bar{A}
=-\frac{1}{\sqrt{V}}\sum_{\bar{k}}\sum_s \hat{\bar{\epsilon}}_{\bar{k},s}
\left[
-i\omega_{\bar{k}}A_{\bar{k},s}\,e^{i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
+i\omega_{\bar{k}}A_{\bar{k},s}^{*}\,e^{-i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
\right]
$$
hence
$$
\bar{E}(\bar{r},t)
=\frac{i}{\sqrt{V}}\sum_{\bar{k}}\sum_s \omega_{\bar{k}}\hat{\bar{\epsilon}}_{\bar{k},s}
\left[
A_{\bar{k},s}\,e^{i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
-
A_{\bar{k},s}^{*}\,e^{-i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
\right].
$$

Also
$$
\bar{B}(\bar{r},t)=\bar{\nabla}\wedge \bar{A}
=\frac{i}{\sqrt{V}}\sum_{\bar{k}}\sum_s (\bar{k}\wedge \hat{\bar{\epsilon}}_{\bar{k},s})
\left[
A_{\bar{k},s}\,e^{i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
-
A_{\bar{k},s}^{*}\,e^{-i(\bar{k}\cdot\bar{r}-\omega_{\bar{k}}t)}
\right].
$$

## Square the electric field

Now we square them, starting from the electric field:
$$
\bar{E}^{\,2}
=\left(
\frac{i}{\sqrt{V}}\sum_{\bar{n}}\sum_s \omega_{\bar{n}}\hat{\bar{\epsilon}}_{\bar{n},s}
\left[
A_{\bar{n},s}e^{i(\bar{n}\cdot\bar{r}-\omega_{\bar{n}}t)}
-
A^{*}_{\bar{n},s}e^{-i(\bar{n}\cdot\bar{r}-\omega_{\bar{n}}t)}
\right]\right)\cdot(\cdots)
$$
so
$$\begin{aligned}
\bar{E}^{\,2}
=-\frac{1}{V}\sum_{\bar{n},\bar{k}}\sum_{s,s'}\omega_{\bar{n}}\omega_{\bar{k}}
\left(\hat{\bar{\epsilon}}_{\bar{n},s}\cdot \hat{\bar{\epsilon}}_{\bar{k},s'}\right)
\Big[
A_{\bar{n},s}A_{\bar{k},s'}\,e^{i[(\bar{n}+\bar{k})\cdot\bar{r}-(\omega_{\bar{n}}+\omega_{\bar{k}})t]}
- A_{\bar{n},s}A^{*}_{\bar{k},s'}\,e^{i[(\bar{n}-\bar{k})\cdot\bar{r}-(\omega_{\bar{n}}-\omega_{\bar{k}})t]} + \\
- A^{*}_{\bar{n},s}A_{\bar{k},s'}\,e^{i[(-\bar{n}+\bar{k})\cdot\bar{r}-(-\omega_{\bar{n}}+\omega_{\bar{k}})t]}
+ A^{*}_{\bar{n},s}A^{*}_{\bar{k},s'}\,e^{i[(-\bar{n}-\bar{k})\cdot\bar{r}-(-\omega_{\bar{n}}-\omega_{\bar{k}})t]}
\Big].
\end{aligned}
$$

Now we integrate the expression over a volume $V$, using the following identities:
$$
\frac{1}{V}\int d\bar{r}\,e^{i\bar{q}\cdot\bar{r}}=\delta(\bar{q}),\qquad
\hat{\bar{\epsilon}}_{\bar{n},\lambda}=\hat{\bar{\epsilon}}_{-\bar{n},\lambda},\qquad
\delta(-\bar{q})=\delta(\bar{q}),
$$
$$
\omega_{\bar{n}}=c\|\bar{k}\|,\qquad \omega_{-\bar{n}}=\omega_{\bar{n}},\qquad
\hat{\bar{\epsilon}}_{\bar{n},\lambda}\cdot \hat{\bar{\epsilon}}_{\bar{n},\lambda'}=\delta_{\lambda\lambda'}.
$$

Continuing we obtain:
$$
\begin{aligned}
\int d\bar{r}\,\bar{E}^{\,2}
&=\sum_{\bar{n},\bar{k}}\sum_{s,s'}\omega_{\bar{n}}\omega_{\bar{k}}
\left(\hat{\bar{\epsilon}}_{\bar{n},s}\cdot \hat{\bar{\epsilon}}_{\bar{k},s'}\right)
\Big[
- A_{\bar{n},s}A_{\bar{k},s'}\,\delta(\bar{n}+\bar{k})\,e^{-i(\omega_{\bar{n}}+\omega_{\bar{k}})t}
+ A_{\bar{n},s}A^{*}_{\bar{k},s'}\,\delta(\bar{n}-\bar{k})\,e^{-i(\omega_{\bar{n}}-\omega_{\bar{k}})t} + \\
&+ A^{*}_{\bar{n},s}A_{\bar{k},s'}\,\delta(\bar{k}-\bar{n})\,e^{-i(\omega_{\bar{k}}-\omega_{\bar{n}})t}
- A^{*}_{\bar{n},s}A^{*}_{\bar{k},s'}\,\delta(-\bar{n}-\bar{k})\,e^{i(\omega_{\bar{n}}+\omega_{\bar{k}})t}
\Big] = \\\\

&=\sum_{\bar{n},\bar{k}}\sum_{s,s'}\omega_{\bar{n}}\omega_{\bar{k}}
\left(\hat{\bar{\epsilon}}_{\bar{n},s}\cdot \hat{\bar{\epsilon}}_{\bar{k},s'}\right)
\Big[
\delta(\bar{n}+\bar{k})\Big(A_{\bar{n},s}A_{\bar{k},s'}e^{-i(\omega_{\bar{n}}+\omega_{\bar{k}})t}
+ A^{*}_{\bar{n},s}A^{*}_{\bar{k},s'}e^{i(\omega_{\bar{n}}+\omega_{\bar{k}})t}\Big)+
\\
&+\delta(\bar{n}-\bar{k})\Big(A_{\bar{n},s}A^{*}_{\bar{k},s'}e^{-i(\omega_{\bar{n}}-\omega_{\bar{k}})t}
+ A^{*}_{\bar{n},s}A_{\bar{k},s'}e^{i(\omega_{\bar{n}}-\omega_{\bar{k}})t}\Big)
\Big]= \\\\
&=\sum_{\bar{n}}\sum_{s,s'}
\Big(-\omega_{\bar{n}}\omega_{-\bar{n}}\,\hat{\bar{\epsilon}}_{\bar{n},s}\cdot\hat{\bar{\epsilon}}_{-\bar{n},s'}\Big)
\Big[
A_{\bar{n},s}A_{-\bar{n},s'}e^{-2i\omega_{\bar{n}}t}
+ A^{*}_{\bar{n},s}A^{*}_{-\bar{n},s'}e^{2i\omega_{\bar{n}}t}
\Big] +
\\
&+\sum_{\bar{n}}\sum_{s,s'}
\Big(\omega_{\bar{n}}\omega_{\bar{n}}\,\hat{\bar{\epsilon}}_{\bar{n},s}\cdot\hat{\bar{\epsilon}}_{\bar{n},s'}\Big)
\Big[
A_{\bar{n},s}A^{*}_{\bar{n},s'}+A^{*}_{\bar{n},s}A_{\bar{n},s'}
\Big]\\\\
&=\sum_{\bar{n}}\sum_{s}\omega_{\bar{n}}^{2}
\Big[
- A_{\bar{n},s}A_{-\bar{n},s}e^{-2i\omega_{\bar{n}}t}
- A^{*}_{\bar{n},s}A^{*}_{-\bar{n},s}e^{2i\omega_{\bar{n}}t}
+ A_{\bar{n},s}A^{*}_{\bar{n},s}+A^{*}_{\bar{n},s}A_{\bar{n},s}
\Big].\end{aligned}
$$

## Magnetic field

Let’s do the same for the magnetic field:
$$
\bar{B}^{\,2}
=\left(
\frac{i}{\sqrt{V}}\sum_{\bar{n}}\sum_s(\bar{n}\wedge\hat{\bar{\epsilon}}_{\bar{n},s})
\left[
A_{\bar{n},s}e^{i(\bar{n}\cdot\bar{r}-\omega_{\bar{n}}t)}
-
A^{*}_{\bar{n},s}e^{-i(\bar{n}\cdot\bar{r}-\omega_{\bar{n}}t)}
\right]\right)\cdot(\cdots)
$$
$$
=-\frac{1}{V}\sum_{\bar{n},\bar{k}}\sum_{s,s'}
\Big((\bar{n}\wedge\hat{\bar{\epsilon}}_{\bar{n},s})\cdot(\bar{k}\wedge\hat{\bar{\epsilon}}_{\bar{k},s'})\Big)\,(\cdots).
$$

Where we use the identity
$$
(\bar{a}\wedge\bar{b})\cdot(\bar{c}\wedge\bar{d})
=(\bar{a}\cdot\bar{c})(\bar{b}\cdot\bar{d})-(\bar{a}\cdot\bar{d})(\bar{b}\cdot\bar{c}),
$$
in our case we obtain:
$$
\bar{B}^{\,2}
=-\frac{1}{V}\sum_{\bar{n},\bar{k}}\sum_{s,s'}
\Big[
(\bar{n}\cdot\bar{k})\big(\hat{\bar{\epsilon}}_{\bar{n},s}\cdot\hat{\bar{\epsilon}}_{\bar{k},s'}\big)
-(\bar{n}\cdot\hat{\bar{\epsilon}}_{\bar{k},s'})(\bar{k}\cdot\hat{\bar{\epsilon}}_{\bar{n},s})
\Big]\;(\cdots).
$$

We integrate then with the same spirit:
$$
\begin{aligned}
\int d\bar{r}\,\bar{B}^{\,2}
&=\sum_{\bar{n},\bar{k}}\sum_{s,s'}
\Big[
(\bar{n}\cdot\bar{k})\big(\hat{\bar{\epsilon}}_{\bar{n},s}\cdot\hat{\bar{\epsilon}}_{\bar{k},s'}\big)
-(\bar{n}\cdot\hat{\bar{\epsilon}}_{\bar{k},s'})(\bar{k}\cdot\hat{\bar{\epsilon}}_{\bar{n},s})
\Big]
\Big[
\delta(\bar{n}+\bar{k})\Big(A_{\bar{n},s}A_{\bar{k},s'}e^{-i(\omega_{\bar{n}}+\omega_{\bar{k}})t}
+ A^{*}_{\bar{n},s}A^{*}_{\bar{k},s'}e^{i(\omega_{\bar{n}}+\omega_{\bar{k}})t}\Big)
\\
&+\delta(\bar{n}-\bar{k})\Big(A_{\bar{n},s}A^{*}_{\bar{k},s'}e^{-i(\omega_{\bar{n}}-\omega_{\bar{k}})t}
+ A^{*}_{\bar{n},s}A_{\bar{k},s'}e^{i(\omega_{\bar{n}}-\omega_{\bar{k}})t}\Big)
\Big].
\end{aligned}
$$

Recalling the polarization basis orthogonality condition: $\bar{k}\cdot \hat{\bar{\epsilon}}_{\bar{k},s}=0$, and using $\omega_{\bar{n}}^2=c^2\|\bar{n}\|^2$,
$$
\int d\bar{r}\,\bar{B}^{\,2}
=\sum_{\bar{n}}\sum_{s} \|\bar{n}\|^2
\Big[
+ A_{\bar{n},s}A_{-\bar{n},s}e^{-2i\omega_{\bar{n}}t}
+ A^{*}_{\bar{n},s}A^{*}_{-\bar{n},s}e^{2i\omega_{\bar{n}}t}
+ A_{\bar{n},s}A^{*}_{\bar{n},s}
+ A^{*}_{\bar{n},s}A_{\bar{n},s}
\Big].
$$

## Put all together

Finally we can put all together, using:
$$
\omega^2=c^2\|\bar{k}\|^2=\frac{\|\bar{k}\|^2}{\varepsilon_0\mu_0}
\quad\Rightarrow\quad
\frac{\|\bar{k}\|^2}{\mu_0}=\omega^2\varepsilon_0.
$$

We have:
$$
\begin{aligned}
\int d\bar{r}\left(\frac{1}{2}\varepsilon_0\bar{E}^{\,2}+\frac{1}{2\mu_0}\bar{B}^{\,2}\right)
&=
\frac{1}{2}\sum_{\bar{n}}\sum_s
\left\{
\varepsilon_0\omega_{\bar{n}}^2
\Big[
- A_{\bar{n},s}A_{-\bar{n},s}e^{-2i\omega_{\bar{n}}t}
- A^{*}_{\bar{n},s}A^{*}_{-\bar{n},s}e^{2i\omega_{\bar{n}}t}
+ A_{\bar{n},s}A^{*}_{\bar{n},s}
+ A^{*}_{\bar{n},s}A_{\bar{n},s}
\Big] 
\right\} + \\
+&\frac{1}{2}\sum_{\bar{n}}\sum_s
\left\{
\frac{\|\bar{n}\|^2}{\mu_0}
\Big[
+ A_{\bar{n},s}A_{-\bar{n},s}e^{-2i\omega_{\bar{n}}t}
+ A^{*}_{\bar{n},s}A^{*}_{-\bar{n},s}e^{2i\omega_{\bar{n}}t}
+ A_{\bar{n},s}A^{*}_{\bar{n},s}
+ A^{*}_{\bar{n},s}A_{\bar{n},s}
\Big]
\right\} = \\

&=\frac{1}{2}\sum_{\bar{n}}\sum_s \omega_{\bar{n}}^2\varepsilon_0
\Big[2A_{\bar{n},s}A^{*}_{\bar{n},s}+2A^{*}_{\bar{n},s}A_{\bar{n},s}\Big]=\\
&=\sum_{\bar{n}}\sum_s \omega_{\bar{n}}^2\varepsilon_0
\Big[A_{\bar{n},s}A^{*}_{\bar{n},s}+A^{*}_{\bar{n},s}A_{\bar{n},s}\Big].\end{aligned}
$$
