This approximation is an example of the approach in which the functional in [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Free energy functional in the mean field approximation|Free energy functional in the mean field approximation]] is parameterized via the order parameter rather than than the probability distribution.

We do this with the Ising model in the nearest neighbor approximation with non uniform magnetic field.
We recall that the system Hamiltonian is :

$$ \mathscr{H} = -\frac{J}{2}\sum_{<i,j>}s_is_j - \sum_i H_i s_i$$

The r.v.s. describing the system are the spins $\phi_i \iff s_i$, and the order parameter are $\braket{\phi_i} \iff \braket {s_i} = m_i$, which is site dependent as the magnetic field is non uniform.

#### Probability density function evaluation

Now we have to find the one-point pdf through the constraints:

$$ \text{Tr} \rho_i = 1 \qquad \text{Tr} \rho_is_i = m_i $$

Then we have to propose a functional form for $\rho_i$ that has 2 free parameters. One possible choice is to assign, say $b_i$ to the possibility that the spin assume value $1$ and $a_i$ to any other possibility (in this case that spin assume value $-1$) .
Then the pdf has form:

$$ \rho_i = a_i(1-\delta_{s_i,1}) + b_i\delta_{s_i,1} $$

Now we apply the constraints:

$$ 1 = \text{Tr} \rho_i = \text{Tr}^{(i)} \rho_i = \sum_{s_i \pm 1} a_i(1-\delta_{s_i,1}) + b_i\delta_{s_i,1} =a_i+b_i  $$

and

$$ m_i =  \text{Tr} \rho_is_i =\sum_{s_i \pm1} (a_i(1-\delta_{s_i,1}) + b_i\delta_{s_i,1})s_i = -a_i +b_i $$

Putting all together we obtain :

$$ a_i = \frac{1-m_i}{2} \qquad b_i = \frac{1+m_i}{2} $$

So in the end we find for the pdf:

$$ \rho_i =\frac{1+m_i}{2}\delta_{s_i,1}+ \frac{1-m_i}{2}(1-\delta_{s_i,1}) $$

Note that this can be recasted as a [[Projects/Equilibrium Statistical Mechanics/Matrix form of the mean field pdf in the Bragg-Williams approximation|matrix]].

### Free energy functional evaluation

Now we are all set for rewriting the mean field free energy functional:

$$ \mathscr{F}^{MF}_\rho \equiv \braket{\mathscr{H}} +k_BT\ \sum_{\alpha=1}^{N}\text{Tr}^{(\alpha)}\rho_{\alpha} \ln \rho_{\alpha} $$

We begin from the energy term.
#### Mean field energy term 

We have:

$$
\braket{\mathscr{H}} = \braket{-\frac{J}{2}\sum_{<i,j>}s_is_j - \sum_i H_i s_i} = -\frac{J}{2}\sum_{<i,j>}\braket{s_is_j} - \sum_i H_i m_i$$

Now let's focus on $\braket{s_is_j}$. Given that are in the mean field approximation:

$$ \braket{s_is_j} = \text{Tr} \rho s_is_j =\text{Tr}^{(i)} \rho_is_i \text{Tr}^{(i)}\rho_js_j =\text{Tr} \rho s_i \text{Tr}\rho s_j= \braket{s_i}\braket{s_j} $$

Given that $\rho = \prod_{\alpha}\rho_\alpha$ and $\text{Tr}^{(\alpha)}\rho_\alpha = 1$.
So in the end:

$$
\braket{\mathscr{H}} = -\frac{J}{2}\sum_{<i,j>}m_im_j - \sum_i H_i m_i$$

#### Mean field entropy term

First we prove a useful lemma. Specifically:

$$ 
\begin{aligned}
\braket{g(s_i)} &= \text{Tr}\ \rho g(s_i) = \text{Tr}^{(i)}\rho_i g(s_i) = \sum_{s_i\pm1}\rho_i g(s_i) = \\
&=\sum_{s_i\pm1}g(s_i) ( a_i(1-\delta_{s_i,1}) + b_i\delta_{s_i,1} ) = a_ig(-1) +b_ig(+1) = \\
&=\frac{1-m_1}{2}g(-1) + \frac{1+m_1}{2}g(+1)
\end{aligned}
$$

Then now we have:

$$
\begin{aligned}
\text{Tr}^{(\alpha)}\rho_{\alpha} \ln \rho_{\alpha} &= \text{Tr}\rho \ln \rho_{\alpha} = \braket{\ln \rho_{\alpha}} = \frac{1-m_i}{2}\ln\rho_{\alpha}(-1) + \frac{1+m_i}{2}\ln\rho_{\alpha}(+1) = \\
&=\frac{1-m_i}{2}\ln\left( \frac{1-m_i}{2}\right) + \frac{1+m_i}{2}\ln\left( \frac{1+m_i}{2}\right)
\end{aligned}
$$

Then the whole entropy term is

$$ k_BT \sum_i \left[\frac{1-m_i}{2}\ln\left( \frac{1-m_i}{2}\right) + \frac{1+m_i}{2}\ln\left( \frac{1+m_i}{2}\right)  \right] $$

Now we finally can build the whole functional:

$$ \mathscr{F}^{MF}_\rho(m_i) =  -\frac{J}{2}\sum_{<i,j>}m_im_j - \sum_i H_i m_i +  k_BT \sum_i \left[\frac{1-m_i}{2}\ln\left( \frac{1-m_i}{2}\right) + \frac{1+m_i}{2}\ln\left( \frac{1+m_i}{2}\right)  \right]  $$

And differentiate it to find the values $\bar{m}_i$ that minimize it:

$$ \frac{\partial \mathscr{F}^{MF}}{\partial m_{\alpha}} = 0$$

This [[Calculations/minimization of the free energy functional in the bragg-williams approximation.pdf|leads]] to the self consistent equation:

$$ m_{\alpha} = \tanh\left[\beta\left( h_\alpha + J \sum_{i\in N(\alpha) }m_i \right)\right] $$

Note that this is the same equation of [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Partition function and bulk free energy in the mean field Ising model|Partition function and bulk free energy in the mean field Ising model]] where we assume $h_\alpha = h$, and $m_i = m$, so that $\sum_{i\in N(\alpha) }m_i = \sum_{i\in N(\alpha) }m = zm$ with $z$ coordination number. 
