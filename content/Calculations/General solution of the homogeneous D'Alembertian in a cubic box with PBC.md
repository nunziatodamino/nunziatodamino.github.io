Starting from the free-space wave equation

$$
\Box \bar A(\bar r,t)=0,
\qquad
\Box=\nabla^2-\frac{1}{c^2}\frac{\partial^2}{\partial t^2},
$$

we expand the field through its spatial Fourier transform,

$$
\bar A(\bar r,t)
=
\int \frac{d^3k}{(2\pi)^3}\,
\tilde{\bar A}(\bar k,t)e^{i\bar k\cdot\bar r}.
$$

The wave equation becomes, mode by mode,

$$
\ddot{\tilde{\bar A}}(\bar k,t)
+
c^2|\bar k|^2\tilde{\bar A}(\bar k,t)
=
0.
$$

For every fixed $\bar k$, this is the equation of a harmonic oscillator with frequency

$$
\omega_{\bar k}=c|\bar k|,
$$

whose general solution is

$$
\tilde{\bar A}(\bar k,t)
=
\bar C(\bar k)e^{-i\omega_{\bar k}t}
+
\bar D(\bar k)e^{i\omega_{\bar k}t}.
$$

Substituting into the Fourier expansion gives the general free-space solution

$$
\bar A(\bar r,t)
=
\int \frac{d^3k}{(2\pi)^3}
\left[
\bar C(\bar k)e^{i(\bar k\cdot\bar r-\omega_{\bar k}t)}
+
\bar D(\bar k)e^{i(\bar k\cdot\bar r+\omega_{\bar k}t)}
\right].
$$

To perform box normalization, we introduce an auxiliary cubic volume

$$
V=L^3
$$

and impose [[Born-Von Karman boundary conditions]],

$$
\bar A(\bar r+L\bar e_i,t)
=
\bar A(\bar r,t),
\qquad
i=1,2,3.
$$

For each plane-wave mode this implies

$$
e^{ik_iL}=1,
$$

and therefore

$$
k_i=\frac{2\pi}{L}n_i,
\qquad
n_i\in\mathbb Z,
$$

or equivalently

$$
\bar k
=
\frac{2\pi}{L}
(n_x,n_y,n_z).
$$

The elementary volume in $\bar k$-space is then

$$
\Delta^3k
=
\left(\frac{2\pi}{L}\right)^3
=
\frac{(2\pi)^3}{V},
$$

so that

$$
\int\frac{d^3k}{(2\pi)^3}
\longrightarrow
\frac{1}{V}\sum_{\bar k}.
$$

The free-space solution is therefore recast as

$$
\bar A(\bar r,t)
=
\frac{1}{V}
\sum_{\bar k}
\left[
\bar C(\bar k)e^{i(\bar k\cdot\bar r-\omega_{\bar k}t)}
+
\bar D(\bar k)e^{i(\bar k\cdot\bar r+\omega_{\bar k}t)}
\right].
$$

We now introduce the normalized box modes

$$
u_{\bar k}(\bar r)
=
\frac{1}{\sqrt V}
e^{i\bar k\cdot\bar r},
$$

which satisfy

$$
\int_V d^3r\,
u_{\bar k}^*(\bar r)
u_{\bar k'}(\bar r)
=
\delta_{\bar k,\bar k'}.
$$

Redefining the coefficients as

$$
\bar C_{\bar k}
=
\frac{\bar C(\bar k)}{\sqrt V},
\qquad
\bar D_{\bar k}
=
\frac{\bar D(\bar k)}{\sqrt V},
$$

the field becomes

$$
\bar A(\bar r,t)
=
\frac{1}{\sqrt V}
\sum_{\bar k}
\left[
\bar C_{\bar k}e^{i(\bar k\cdot\bar r-\omega_{\bar k}t)}
+
\bar D_{\bar k}e^{i(\bar k\cdot\bar r+\omega_{\bar k}t)}
\right].
$$

The factor $1/\sqrt V$ is therefore a normalization convention for the box modes, rather than a consequence of the wave equation itself.

For the electromagnetic field in Coulomb gauge,

$$
\bar\nabla\cdot\bar A=0.
$$

For each Fourier mode this implies

$$
\bar k\cdot\tilde{\bar A}_{\bar k}=0,
$$

so the vector amplitude lies in the two-dimensional subspace orthogonal to $\bar k$. We introduce two transverse polarization vectors

$$
\bar\epsilon_{\bar k,s},
\qquad
s=1,2,
$$

satisfying

$$
\bar k\cdot\bar\epsilon_{\bar k,s}=0,
$$

and choose them orthonormal,

$$
\bar\epsilon_{\bar k,s}^{\,*}
\cdot
\bar\epsilon_{\bar k,s'}
=
\delta_{ss'}.
$$

The mode coefficients can therefore be decomposed as

$$
\bar C_{\bar k}
=
\sum_{s=1}^{2}
C_{\bar k,s}\bar\epsilon_{\bar k,s},
\qquad
\bar D_{\bar k}
=
\sum_{s=1}^{2}
D_{\bar k,s}\bar\epsilon_{\bar k,s},
$$

giving

$$
\boxed{
\bar A(\bar r,t)
=
\frac{1}{\sqrt V}
\sum_{\bar k}
\sum_{s=1}^{2}
\bar\epsilon_{\bar k,s}
\left[
C_{\bar k,s}e^{i(\bar k\cdot\bar r-\omega_{\bar k}t)}
+
D_{\bar k,s}e^{i(\bar k\cdot\bar r+\omega_{\bar k}t)}
\right].
}
$$

Finally, since the classical vector potential is real,

$$
\bar A^*(\bar r,t)=\bar A(\bar r,t),
$$

the coefficients are not independent. We can therefore write the field in terms of a single complex amplitude $A_{\bar k,s}$ as

$$
\boxed{
\bar A(\bar r,t)
=
\frac{1}{\sqrt V}
\sum_{\bar k}
\sum_{s=1}^{2}
\left[
A_{\bar k,s}\,
\bar\epsilon_{\bar k,s}\,
e^{i(\bar k\cdot\bar r-\omega_{\bar k}t)}
+
A_{\bar k,s}^{*}\,
\bar\epsilon_{\bar k,s}^{*}\,
e^{-i(\bar k\cdot\bar r-\omega_{\bar k}t)}
\right].
}
$$

The polarization vectors can in general be complex. For example, circular polarization is described by complex polarization vectors. Therefore, in the most general case,

$$
\bar\epsilon_{\bar k,s}^{\,*}
\neq
\bar\epsilon_{\bar k,s}.
$$

For linear polarization, however, the polarization vectors can be chosen real, so that

$$
\bar\epsilon_{\bar k,s}^{\,*}
=
\bar\epsilon_{\bar k,s}.
$$

Hence, assuming linear polarization, the field expansion can be written as

$$
\boxed{
\bar A(\bar r,t)
=
\frac{1}{\sqrt V}
\sum_{\bar k}
\sum_{s=1}^{2}
\bar\epsilon_{\bar k,s}
\left[
A_{\bar k,s}
e^{i(\bar k\cdot\bar r-\omega_{\bar k}t)}
+
A_{\bar k,s}^{*}
e^{-i(\bar k\cdot\bar r-\omega_{\bar k}t)}
\right].
}
$$
