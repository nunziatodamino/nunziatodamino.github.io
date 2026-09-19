Let us start from the [[The Pauli equation for a charged particle]]:

$$
i\hbar\partial_t\psi
=
\left(
\hat{\mathscr H}_{\mathrm{nonrel}}
+
\frac{e}{m}\hat{\bar S}\cdot\bar B
\right)\psi .
$$

Specifically, considering an hydrogenic atom,

$$
i\hbar\partial_t\psi
=
\left[
\frac{\hat{\bar\pi}^{\,2}}{2m}
+
V(r)
+
\frac{e}{m}\hat{\bar S}\cdot\bar B
\right]\psi ,
$$

where, for an electron, $\hat{\bar\pi}=\hat{\bar p}+e\bar A,V(r)=-k_e\frac{Z e^2}{r}$

Therefore,

$$
\begin{aligned}
i\hbar\partial_t\psi
={}&
\left[
\frac{\hat{\bar p}^{\,2}}{2m}
-k_e\frac{Ze^2}{r}
+\frac{e}{2m}
\left(
\hat{\bar p}\cdot\bar A
+
\bar A\cdot\hat{\bar p}
\right)
+\frac{e^2}{2m}\bar A^{\,2}
+\frac{e}{m}\hat{\bar S}\cdot\bar B
\right]\psi .
\end{aligned}
$$

In the Coulomb gauge $\bar\nabla\cdot\bar A=0$ we [[Proof of exchange of vector potential and momentum using the Coulomb gauge in the context of the dipole approximation|showed]] that $\hat{\bar p}\cdot\bar A=\bar A\cdot\hat{\bar p}$, thus:

$$
i\hbar\partial_t\psi
=
\left[
\frac{\hat{\bar p}^{\,2}}{2m}
-\frac{Ze^2}{4\pi\varepsilon_0 r}
+\frac{e}{m}\bar A\cdot\hat{\bar p}
+\frac{e^2}{2m}\bar A^{\,2}
+\frac{e}{m}\hat{\bar S}\cdot\bar B
\right]\psi .
$$

In the mixed representation:

$$
i\hbar\partial_t\psi
=
\left[
-\frac{\hbar^2}{2m}\nabla^2
-\frac{Ze^2}{4\pi\varepsilon_0 r}
-\frac{i\hbar e}{m}\bar A\cdot\bar\nabla
+\frac{e^2}{2m}\bar A^{\,2}
+\frac{e}{m}\hat{\bar S}\cdot\bar B
\right]\psi .
$$

Now consider a uniform magnetic field

$$
\bar B=(0,0,B_z).
$$

A possible choice of vector potential is the symmetric gauge,

$$
\bar A
=
\frac{1}{2}\bar B\times\bar r.
$$

We first consider the term linear in $\bar A$:

$$
\begin{aligned}
-\frac{i\hbar e}{m}\bar A\cdot\bar\nabla
&=
-\frac{i\hbar e}{2m}
(\bar B\times\bar r)\cdot\bar\nabla
\\
&=
-\frac{i\hbar e}{2m}
(\bar r\times\bar\nabla)\cdot\bar B.
\end{aligned}
$$

Since $\hat{\bar L}=\bar r\times\hat{\bar p}=-i\hbar\,\bar r\times\bar\nabla,$ we obtain:

$$
\boxed{
-\frac{i\hbar e}{m}\bar A\cdot\bar\nabla
=
\frac{e}{2m}\hat{\bar L}\cdot\bar B
}.
$$

Now consider the term quadratic in $\bar A$:

$$
\begin{aligned}
\frac{e^2}{2m}\bar A^{\,2}
&=
\frac{e^2}{8m}
|\bar B\times\bar r|^2.
\end{aligned}
$$

For $\bar B=(0,0,B_z),\bar r=(x,y,z)$

we have

$$
\bar B\times\bar r
=
(-B_z y,B_z x,0),
$$

and therefore

$$
\begin{aligned}
|\bar B\times\bar r|^2
&=
B_z^2y^2+B_z^2x^2
\\
&=
B_z^2(x^2+y^2).
\end{aligned}
$$

Hence

$$
\boxed{
\frac{e^2}{2m}\bar A^{\,2}
=
\frac{e^2B_z^2}{8m}(x^2+y^2)
}.
$$

Defining the unperturbed hydrogenic Hamiltonian as

$$
\hat{\mathscr H}_0
=
\frac{\hat{\bar p}^{\,2}}{2m}
-\frac{Ze^2}{4\pi\varepsilon_0 r},
$$

the Pauli equation becomes

$$
\begin{aligned}
i\hbar\partial_t\psi
=
\Bigg[
\hat{\mathscr H}_0
+
\frac{e}{2m}\hat{\bar L}\cdot\bar B
+
\frac{e}{m}\hat{\bar S}\cdot\bar B
+
\frac{e^2B_z^2}{8m}(x^2+y^2)
\Bigg]\psi .
\end{aligned}
$$

Combining the two terms linear in the magnetic field,

$$
\boxed{
i\hbar\partial_t\psi
=
\left[
\hat{\mathscr H}_0
+
\frac{e}{2m}
\left(
\hat{\bar L}
+
2\hat{\bar S}
\right)\cdot\bar B
+
\frac{e^2B_z^2}{8m}(x^2+y^2)
\right]\psi
}.
$$

The term

$$
\hat{\mathscr H}_{\mathrm{para}}
=
\frac{e}{2m}
\left(
\hat{\bar L}+2\hat{\bar S}
\right)\cdot\bar B
$$

is the paramagnetic contribution, while

$$
\hat{\mathscr H}_{\mathrm{dia}}
=
\frac{e^2B_z^2}{8m}(x^2+y^2)
$$

is the diamagnetic contribution.
