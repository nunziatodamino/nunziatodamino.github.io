## Functional measure over a cubic lattice

Let $\phi(\vec{x})$ be a **real scalar field** defined on a periodic box $V = [0, L)^3 \subset \mathbb{R}^3$. Discretize space into a regular cubic lattice with $N = N_x N_y N_z$ cells of spacing $a$, such that $L = N_x a$ (and similarly in $y$, $z$).

Each field value $\phi(\bar{r}_n)\equiv\phi_{\vec{n}}$ represents the **average of $\phi$ over the cell centered at** $\vec{r}_{\vec{n}} = (n_x a, n_y a, n_z a)$:

$$
\phi_{\vec{n}} \approx \frac{1}{a^3} \int_{\text{cell}_{\vec{n}}} d^3 x\, \phi(\vec{x}),
$$

The functional measure is then defined by integrating independently over each cell value:

$$
\int \mathscr{D} \phi := \lim_{N \to \infty} \int_{\mathbb{R}^N} \prod_{\vec{n}} d\phi_{\vec{n}}.
$$

Note that this is object is prone to be ill-defined, but as we are in Physics we assume it exists convergent.

## Change of variables in the functional measure : the Fourier basis

Suppose now we want to change the integration variables from:

$$\phi_{\vec{n}} \to \tilde{\phi}_{\vec{k}}$$

Where $\phi_{\vec{n}}$ are the coefficient of the its Fourier expansion.

First we observe that this expansion is well defined as since the domain is periodic and discretized, the field admits a **discrete Fourier series** representation:

$$
\phi_{\vec{n}} = \frac{1}{\sqrt{N}} \sum_{\vec{k}} e^{-i \vec{k} \cdot \vec{n}}\, \tilde{\phi}_{\vec{k}},
\quad
\tilde{\phi}_{\vec{k}} = \frac{1}{\sqrt{N}} \sum_{\vec{n}} e^{+i \vec{k} \cdot \vec{n}}\, \phi_{\vec{n}}.
$$

Here:
- $\vec{n} = (n_x, n_y, n_z)$ indexes the grid points,
- $\vec{k} = \frac{2\pi}{N a} \cdot (m_x, m_y, m_z)$ with $m_i \in \{0, \dots, N_i - 1\}$ are discrete wavevectors compatible with the periodic box.

Since $\phi_{\vec{n}} \in \mathbb{R}$, the Fourier coefficients satisfy the **reality condition**:

$$
\tilde{\phi}_{-\vec{k}} = \tilde{\phi}_{\vec{k}}^*.
$$

Given this we observe that the change of variables is linear:

$$
\vec{\phi} = U \vec{\tilde{\phi}}, \quad
U_{\vec{n},\vec{k}} = \frac{1}{\sqrt{N}} e^{-i \vec{k} \cdot \vec{n}}.
$$

Thus, the measure transforms as:

$$
\int \prod_{\vec{n}} d\phi_{\vec{n}} = \int |\det U| \prod_{\vec{k}} d\tilde{\phi}_{\vec{k}}.
$$

But the discrete Fourier series is represented by a unitary matrix:

$$
U^\dagger U = I \quad \Rightarrow \quad |\det U| = 1.
$$

So the measure is preserved:

$$
\prod_{\vec{n}} d\phi_{\vec{n}} = \prod_{\vec{k}} d\tilde{\phi}_{\vec{k}}.
$$

## Summary

- The field is defined on a periodic, discretized 3D lattice.
- Each value $\phi_{\vec{n}}$ represents the average field in a spatial cell.
- The field admits a **discrete Fourier series** representation in terms of real-valued modes.
- The Fourier series defines a unitary linear transformation, so the **functional measure is preserved**:

$$
\int \mathscr{D} \phi = \int \mathscr{D} \tilde{\phi}.
$$

This extends to the continuum limit, where the Fourier series becomes a full Fourier transform on function space.
