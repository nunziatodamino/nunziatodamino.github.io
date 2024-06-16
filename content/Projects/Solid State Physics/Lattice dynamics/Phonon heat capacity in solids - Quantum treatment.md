We start our discussion by treating a linear monoatomic chain, with $N$ atoms (or unit cells), in the nearest neighbors approximation.
We begin by writing the system Hamiltonian:

$$H = \sum_{n=0}^{N-1} \left[ \frac{1}{2}mv_n^2 +\frac{\tilde{K}}{2}(u_n-u_{n+1})^2 \right] = \sum_{n=0}^{N-1} \left[ \frac{1}{2}m\left(\frac{du_n}{dt}\right)^2 +\frac{\tilde{K}}{2}(u_n-u_{n+1})^2 \right] $$

That describes a set of coupled oscillators. 
We begin by introducing a canonical transformation that decouples the system. We set them by making the following observation. If $u_n$ is a solution of the equation of motion, then also a linear combination of solution will be a solution itself:

$$u_n(t) = \sum_{k=0}^{N-1} c_k Ae^{i(kna-\omega t)} \equiv \frac{1}{\sqrt{N}}\sum_{k=0}^{N-1} Q_k(t)e^{ikna}$$

Also is easily verified:

$$\dot{u}_n(t) = \frac{1}{\sqrt{N}}\sum_{k=0}^{N-1} \dot{Q}_k(t)e^{ikna}$$

So that we rewrite our Hamiltonian in the coordinates $\{Q_k(t),\dot{Q}_k(t)\}$.
We begin by evaluating the main part of the kinetic term:

$$\begin{aligned} \sum_{n=0}^{N-1} \left(\frac{du_n}{dt}\right)^2 &=  \sum_{n=0}^{N-1} \left(\frac{1}{\sqrt{N}}\sum_{k=0}^{N-1} \dot{Q}_k(t)e^{ikna}\right)\left(\frac{1}{\sqrt{N}}\sum_{k'=0}^{N-1} \dot{Q}_{k'}(t)e^{ik'na}\right) = \\ &= \sum_{n=0}^{N-1} \left[ \frac{1}{N}\sum_{k=0}^{N-1}\sum_{k'=0}^{N-1} \dot{Q}_{k'}(t) \dot{Q}_k(t)e^{i(k+k')na}\right] = \frac{1}{N}\sum_{k=0}^{N-1}\sum_{k'=0}^{N-1} \dot{Q}_{k'}(t) \dot{Q}_k(t)\sum_{n=0}^{N-1} e^{i(k+k')na} =\\ & = \star = \sum_{k=0}^{N-1}\sum_{k'=0}^{N-1} \dot{Q}_{k'}(t) \dot{Q}_k(t)\delta_{k,-k'} =\sum_{k'=0}^{N-1} \dot{Q}_{k'}(t) \dot{Q}_{-k'}(t) = \sum_{k'=0}^{N-1} |\dot{Q}_{k'}(t)|^2 \end{aligned} $$

We now offer a better insight on the $\star$ passage.
The series $\sum_{n=0}^{N-1} e^{i(k+k')na}$ is a geometric series, so that:

$$\sum_{n=0}^{N-1} e^{i(k+k')na} = \frac{1- e^{i(k+k')Na}}{1-e^{i(k+k')a}}$$

We now use the PBC's the use the relation $k = 2\pi n/Na$. So that we can rewrite:

$$\frac{1- e^{i(k+k')Na}}{1-e^{i(k+k')a}}= \frac{1- e^{2i\pi(n+n')}}{1- e^{2i\pi(n+n')/N}}$$

This quantity is 0 when $(n+n')\neq 0 \iff n\neq-n' \iff k\neq-k'$ , and is equal to $N$ when $(n+n')= 0 \iff n=-n' \iff k=-k'$. So that is the proposed Kronecker delta.
We have also used in the kinetic term rewriting that $Q_k^*(t) = Q_{-k}(t)$. This because we impose that the displacements must be real, i.e. $u_n^* = u_n$.
We can now analyse the potential term:

$$\begin{aligned} \sum_{n=0}^{N-1} (u_n-u_{n+1})^2 &= \sum_{n=0}^{N-1}\left(\frac{1}{\sqrt{N}}\sum_{k=0}^{N-1} Q_k(t)e^{ikna}-\frac{1}{\sqrt{N}}\sum_{k=0}^{N-1} Q_{k}(t)e^{ik(n+1)a}\right)\left(\frac{1}{\sqrt{N}}\sum_{k'=0}^{N-1} Q_{k'}(t)e^{ik'na}-\frac{1}{\sqrt{N}}\sum_{k'=0}^{N-1} Q_{k'}(t)e^{ik'(n+1)a}\right) =\\&=\frac{1}{N}\sum_{n=0}^{N-1}\sum_{k=0}^{N-1}\sum_{k'=0}^{N-1}\left( Q_k(t)e^{ikna}- Q_{k}(t)e^{ik(n+1)a}\right)\left( Q_{k'}(t)e^{ik'na}- Q_{k'}(t)e^{ik'(n+1)a}\right) =\\&\frac{1}{N}\sum_{n=0}^{N-1}\sum_{k=0}^{N-1}\sum_{k'=0}^{N-1}Q_{k}(t)Q_{k'}(t)\left( e^{ikna}- e^{ik(n+1)a}\right)\left(e^{ik'na}-e^{ik'(n+1)a}\right) = \\ &=\frac{1}{N}\sum_{n=0}^{N-1}\sum_{k=0}^{N-1}\sum_{k'=0}^{N-1}Q_{k}(t)Q_{k'}(t)e^{i(k+k')na}\left( 1- e^{ika}\right)\left(1-e^{ik'a}\right) =\\&=\frac{1}{N}\sum_{k=0}^{N-1}\sum_{k'=0}^{N-1}Q_{k}(t)Q_{k'}(t)\left( 1- e^{ika}\right)\left(1-  e^{ik'a}\right) \sum_{n=0}^{N-1}e^{i(k+k')na}= \star =\\&=\sum_{k=0}^{N-1}\sum_{k'=0}^{N-1}Q_{k}(t)Q_{k'}(t)\left( 1- e^{ika}\right)\left(1-e^{ik'a}\right) \delta_{k,-k'}=\\&=\sum_{k'=0}^{N-1}Q_{-k'}(t)Q_{k'}(t)\left( 1- e^{-ik'a}\right)\left(1-e^{ik'a}\right)=\sum_{k'=0}^{N-1}|Q_{k'}(t)|^2\left( 1- e^{-ik'a}\right)\left(1-e^{ik'a}\right)=\\&=\sum_{k'=0}^{N-1}|Q_{k'}(t)|^2\left( 2- e^{-ik'a}-e^{ik'a}\right)=2\sum_{k'=0}^{N-1}|Q_{k'}(t)|^2\left( 1- \cos(k'a)\right) =4\sum_{k'=0}^{N-1}|Q_{k'}(t)|^2\sin^2\left(\frac{k'a}{2}\right)=\\&=\frac{m\omega_k^2}{\tilde{K}}\sum_{k'=0}^{N-1}|Q_{k'}(t)|^2 \end{aligned} $$

Where we have used in the last expression the dispersion relation of the linear monoatomic chain.
All this pain leads to the decoupled Hamiltonian:

$$\tilde{H} = \sum_{k=0}^{N-1} \left[ \frac{1}{2}m|\dot{Q}_{k}(t)|^2 + \frac{1}{2}m\omega_k^2|Q_{k}(t)|^2 \right]$$

Or, more properly, once defined the canonically conjugate momentum $P_k = m\dot{Q}_k$:

$$\tilde{H} = \sum_{k=0}^{N-1} \left[ \frac{|P^2_k(t)|^2}{2m} + \frac{1}{2}m\omega_k^2|Q_{k}(t)|^2 \right]$$

That describes a set of $N$ decoupled harmonic oscillators. Is easy then to find the energy eigenvalues:

$$E = \sum_{k=0}^{N-1} \hbar\omega_k \left( n_{k} + \frac{1}{2} \right) \qquad n_k \in \mathbb{N}_0$$

Even if this procedure was carried out for the monoatomic linear chain, this is a concept proof of the following: is always possibile to decouple a crystal Hamiltonian in normal modes.
This result can be generalized for a 3-dimensional monoatomic crystal

$$E = \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( n_{\bar{k},s} + \frac{1}{2} \right) \qquad n_{\bar{k},s} \in \mathbb{N}_0$$

We now introduce a fundamental analogy.
We can see the energy $E$ as the energy of a quasiparticle system that possess the following properties:
- Each quasiparticle possess a quasimomentum $\bar{k}$ and a polarisation $s$, and has energy $\hbar\omega_s(\bar{k})$
- The number of quasiparticles in the system is $\{n_{\bar{k},s}\}$, i.e we will have a number of quasiparticles dependent on the quasimomentum and the polarisation, e.g. in a single system we can have 3 with $\bar{k}_1, s=1$ , 4 with $\bar{k}_2, s=1$ and so on. 
- As an effect of the harmonic approximation, the quasiparticles are non-interacting between themselves (this permits to call the system ''gas'').

We will call these quasiparticles phonons. The main difference with the classical treatment is the fact that here the energies are discretised, so that, in order to evaluate the system internal energy, one must use a series, and not an integral:
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
If we know want to evaluate the [[Projects/Solid State Physics/Thermal transport/Heat capacity in solids - general considerations|heat capacity]], one must perform the following calculation:

$$\begin{aligned} C_v = \frac{dU}{dT} &= \frac{d}{dT} \left[ \sum_s \sum_{\bar{k}} \hbar\omega_s(\bar{k}) \left( \frac{1}{2} +\frac{1}{e^{\beta  \hbar\omega_s(\bar{k})}-1} \right) \right] = 

\\ &=\frac{V}{(2 \pi)^3} \frac{d}{dT} \left[ \sum_s \int_{1^{st}BZ}d^3 k\ \hbar\omega_s(\bar{k}) \left( \frac{1}{2} +\frac{1}{e^{\beta  \hbar\omega_s(\bar{k})}-1} \right) \right] = \frac{V}{(2 \pi)^3} \frac{d}{dT} \left[ \sum_s \int_{1^{st}BZ}d^3 k\  \frac{\hbar\omega_s(\bar{k})}{e^{\beta  \hbar\omega_s(\bar{k})}-1} \right] = 

\\ &=\frac{d}{dT} \left[ \sum_s \int_B \frac{\hbar\omega_s(\bar{k})}{e^{\beta  \hbar\omega_s(\bar{k})}-1} D_s(\omega)d\omega \right] \end{aligned} $$

Where we have used the fact that $\sum_k \iff \tilde{w}(k)\int_{shell}$ , the derivative of the term containing 1/2 is 0 because it doesn't depend on the temperature and finally we have used the definition of density of vibrational states. We denoted with B the set of all admissible frequencies.

This expression depends on the specific form of the DOS, and in order to be evaluated in general further approximation is needed.