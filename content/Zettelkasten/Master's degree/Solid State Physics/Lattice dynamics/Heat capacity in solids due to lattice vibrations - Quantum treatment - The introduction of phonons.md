The idea behind the evaluation of the phonon heat capacity in solids from a quantum point of view is simple in practice: We write the Hamiltonian of the system and introduce a set of appropriate canonical transformation to transform it in a sum of harmonic oscillator of given frequency.
Then the problem is considered solved, because the harmonic oscillator has a known eigenvalue solution.

We show this process in detail for a [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Specific calculation of the phonon quantization for the 1D monoatomic linear chain (opt)|1D monoatomic linear chain]].

The result can be generalized for a 3-dimensional monoatomic crystal

$$E = \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( n_{\bar{k},s} + \frac{1}{2} \right) \qquad n_{\bar{k},s} \in \mathbb{N}_0$$

We now introduce a fundamental analogy.
We can see the energy $E$ as the energy of a quasiparticle system that possess the following properties:
- Each quasiparticle possess a quasimomentum $\bar{k}$ and a polarization $s$, and has energy $\hbar\omega_s(\bar{k})$
- The number of quasiparticles in the system is $\{n_{\bar{k},s}\}$, i.e we will have a number of quasiparticles dependent on the quasimomentum and the polarization, e.g. in a single system we can have 3 with $\bar{k}_1, s=1$ , 4 with $\bar{k}_2, s=1$ and so on. 
- As an effect of the harmonic approximation, the quasiparticles are non-interacting between themselves (this permits to call the system ''gas'').

We will call these quasiparticles **phonons**. The main difference with the classical treatment is the fact that here the energies are discrete, so that, in order to evaluate the system internal energy, one must use a series, and not an integral:
With the same ansatz as the classical case:

$$U = \frac{\sum_i E_ie^{-\beta E_i}}{\sum_ie^{-\beta E_i}} = - \frac{\partial}{\partial \beta} \ln \left(  \sum_ie^{-\beta E_i}\right)$$

As done in the classical counterpart, let's evaluate the partition function

$$\begin{aligned} \mathcal{Z} &= \sum_i \exp{(-\beta E_i)} = \sum_{\{n_{\bar{k},s}\}} \exp{\left(-\beta \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( n_{\bar{k},s} + \frac{1}{2} \right)\right)} =

\\ &= \sum_{\{n_{\bar{k},s}\}}\prod_s \prod_{\bar{k}} \exp{\left(-\beta  \hbar\omega_s(\bar{k}) \left( n_{\bar{k},s} + \frac{1}{2} \right)\right)} = 

\\ & =\sum_{\{n_{\bar{k},s}\}}\prod_s \prod_{\bar{k}}\left[ \exp{\left(- \frac{1}{2}\beta  \hbar\omega_s(\bar{k}) \right)}\exp{\left(-\beta  \hbar\omega_s(\bar{k}) n_{\bar{k},s} \right)}\right] = 

\\ & = \prod_s \prod_{\bar{k}}\left[ \exp{\left(- \frac{1}{2}\beta  \hbar\omega_s(\bar{k}) \right)}\sum_{\{n_{\bar{k},s}\}}\exp{\left(-\beta  \hbar\omega_s(\bar{k})\right)^ {n_{\bar{k},s}}}\right]  =

\\ & = \prod_s \prod_{\bar{k}} \frac{e^{- \frac{1}{2}\beta  \hbar\omega_s(\bar{k})}}{1-e^{- \beta  \hbar\omega_s(\bar{k})}} \end{aligned} $$

Therefore we can evaluate the internal energy:

$$ \begin{aligned} U &= - \frac{\partial}{\partial \beta} \ln \left(  \sum_ie^{-\beta E_i}\right) = - \frac{\partial}{\partial \beta} \ln \left(\prod_s \prod_{\bar{k}} \frac{e^{- \frac{1}{2}\beta  \hbar\omega_s(\bar{k})}}{1-e^{- \beta  \hbar\omega_s(\bar{k})}} \right) =- \frac{\partial}{\partial \beta} \sum_s \sum_{\bar{k}}\ln \left(\frac{e^{- \frac{1}{2}\beta  \hbar\omega_s(\bar{k})}}{1-e^{- \beta  \hbar\omega_s(\bar{k})}} \right) =

\\ & = - \sum_s \sum_{\bar{k}}\frac{\partial}{\partial \beta} \ln \left(\frac{e^{- \frac{1}{2}\beta  \hbar\omega_s(\bar{k})}}{1-e^{- \beta  \hbar\omega_s(\bar{k})}} \right) = \sum_s \sum_{\bar{k}}\frac{-(1-e^{-\beta  \hbar\omega_s(\bar{k})})}{e^{ -\frac{1}{2}\beta  \hbar\omega_s(\bar{k})}} \frac{\partial}{\partial \beta}\left(\frac{e^{- \frac{1}{2}\beta  \hbar\omega_s(\bar{k})}}{1-e^{- \beta  \hbar\omega_s(\bar{k})}} \right)=

\\ &  = \sum_s \sum_{\bar{k}}\frac{-(1-e^{-\beta  \hbar\omega_s(\bar{k})})}{e^{ -\frac{1}{2}\beta  \hbar\omega_s(\bar{k})}} \frac{-\frac{1}{2}\hbar\omega_s(\bar{k}) e^{- \frac{1}{2}\beta  \hbar\omega_s(\bar{k})}(1-e^{- \beta  \hbar\omega_s(\bar{k})})-\hbar\omega_s(\bar{k})e^{- \frac{1}{2}\beta  \hbar\omega_s(\bar{k})}e^{- \beta  \hbar\omega_s(\bar{k})}}{(1-e^{- \beta  \hbar\omega_s(\bar{k})})^2} =

\\ &  =\sum_s \sum_{\bar{k}} \frac{\frac{1}{2}\hbar\omega_s(\bar{k}) (1-e^{- \beta  \hbar\omega_s(\bar{k})})+\hbar\omega_s(\bar{k})e^{- \beta  \hbar\omega_s(\bar{k})}}{1-e^{- \beta  \hbar\omega_s(\bar{k})}} = \sum_s \sum_{\bar{k}}\hbar\omega_s(\bar{k}) \left(\frac{1}{2}+ \frac{e^{- \beta  \hbar\omega_s(\bar{k})}}{1-e^{- \beta  \hbar\omega_s(\bar{k})}}\right) =

\\ & = \sum_s \sum_{\bar{k}}\hbar\omega_s(\bar{k}) \left(\frac{1}{2}+ \frac{1}{e^{ \beta  \hbar\omega_s(\bar{k})}-1}\right)

\end{aligned}$$

We obtain in the end:

$$U  = \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( \frac{1}{2} +\frac{1}{e^{\beta  \hbar\omega_s(\bar{k})}-1} \right) = \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( \frac{1}{2} +<n_{\bar{k},s}> \right)  $$

Where in last line we have shown that the mean phonon number follows the Bose-Einstein statistics in the limit of the Planck distribution:

$$<n_{\bar{k},s}>=\frac{1}{e^{\beta  \hbar\omega_s(\bar{k})}-1}$$

That is the same statistics that photons follows.
If we know want to evaluate the [[Zettelkasten/Master's degree/Solid State Physics/Thermal transport/Heat capacity in solids - general considerations|heat capacity]], one must perform the following calculation:

$$\begin{aligned} C_v = \frac{dU}{dT} &= \frac{d}{dT} \left[ \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( \frac{1}{2} +\frac{1}{e^{\beta  \hbar\omega_s(\bar{k})}-1} \right) \right] = 

\\ &=\frac{V}{(2 \pi)^3} \frac{d}{dT} \left[ \sum_s \int_{1^{st}BZ}d^3 k\ \hbar\omega_s(\bar{k}) \left( \frac{1}{2} +\frac{1}{e^{\beta  \hbar\omega_s(\bar{k})}-1} \right) \right] = \frac{V}{(2 \pi)^3} \frac{d}{dT} \left[ \sum_s \int_{1^{st}BZ}d^3 k\  \frac{\hbar\omega_s(\bar{k})}{e^{\beta  \hbar\omega_s(\bar{k})}-1} \right] = 

\\ &=\frac{d}{dT} \left[ \sum_s \int_B \frac{\hbar\omega_s(\bar{k})}{e^{\beta  \hbar\omega_s(\bar{k})}-1} D_s(\omega)d\omega \right] \end{aligned} $$

Where we have used the fact that $\sum_k \iff \tilde{w}(k)\int_{shell}$ , the derivative of the term containing 1/2 is 0 because it doesn't depend on the temperature and finally we have used the definition of density of vibrational states. We denoted with B the set of all admissible frequencies.

This expression depends on the specific form of the DOS, and in order to be evaluated in general further approximation is needed.