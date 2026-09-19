Consider the expression

$$H = \sum_{\bar{k}}\sum_s \varepsilon_0\omega^2_k\left(A_{\bar{k}s}A^*_{\bar{k}s}+A^*_{\bar{k}s}A_{\bar{k}s}\right)$$
found [[Electromagnetic energy with respect to the vector potential in the Coulomb gauge|previously]].

Now, in order to obtain what we want essentially, we introduce a new set of adimensional quantities such as:

$$ A_{\bar{k}s} = \sqrt{\frac{\hbar}{2\varepsilon_0\omega_k}}\  a_{\bar{k}s} \qquad A^*_{\bar{k}s} = \sqrt{\frac{\hbar}{2\varepsilon_0\omega_k}}\  a^*_{\bar{k}s}$$

In this way we can rewrite the energy $H$ as:

$$H =\sum_{\bar{k}}\sum_s \frac{1}{2}\hbar\omega_k\left(a_{\bar{k}s}a^*_{\bar{k}s}+a^*_{\bar{k}s}a_{\bar{k}s}\right)$$


We can also introduce another 2 variables that are real by construction, instead of complex like the one we have now. (Note that even if complex this does not constitute a problem, because $H$ is real).
Again we define, just for convenience:

$$ \begin{cases} 
q_{\bar{k}s} = \sqrt{\frac{\hbar}{2\omega_k}}  (a_{\bar{k}s}+a^*_{\bar{k}s}) \\ p_{\bar{k}s} = i \sqrt{\frac{\hbar\omega_k}{2}} (a^*_{\bar{k}s}-a_{\bar{k}s}) \end{cases} \qquad \iff \qquad 
\begin{cases} 
a_{\bar{k}s} = \sqrt{\frac{\omega_k}{2\hbar}} (q_{\bar{k}s}+ \frac{i}{\omega_k}p_{\bar{k}s}) \\
a^*_{\bar{k}s} = \sqrt{\frac{\omega_k}{2\hbar}} (q_{\bar{k}s}- \frac{i}{\omega_k}p_{\bar{k}s}) 
\end{cases}$$

So that our energy becomes:

$$H = \sum_{\bar{k}}\sum_s \frac{p^2_{\bar{k}s}}{2} + \frac{1}{2}\omega_k^2q^2_{\bar{k}s}  $$

Formally a collection of oscillators of mass 1, namely we have decomposed the electromagnetic field in its normal modes.
We now quantize this field by using arguments from the first quantization process, i.e. by promoting the dynamical variables to operators dependent on time (we are implying then the use of the Heisenberg picture)
We consider the promotion:

$$ q_{\bar{k}s} \to \hat{q}_{\bar{k}s}(t) \qquad p_{\bar{k}s} \to \hat{p}_{\bar{k}s}(t)  $$

Where these operators must satisfy the commutation relation:

$$ [ \hat{q}_{\bar{k}s}(t), \hat{p}_{\bar{k'}s'}(t)] = i\hbar\delta_{\bar{k}\bar{k'}}\delta_{ss'}\hat{\mathbb{1}} $$

Moreover we define the operators :

$$\begin{cases} 
\hat{a}_{\bar{k}s} = \sqrt{\frac{\omega_k}{2\hbar}} (\hat{q}_{\bar{k}s}+ \frac{i}{\omega_k}\hat{p}_{\bar{k}s}) \\
\hat{a}^\dagger_{\bar{k}s} = \sqrt{\frac{\omega_k}{2\hbar}} (\hat{q}_{\bar{k}s}- \frac{i}{\omega_k}\hat{p}_{\bar{k}s}) 
\end{cases}$$

And we will call them destruction operator ($\hat{a}_{\bar{k}s}$) and creation operator ($\hat{a}^*_{\bar{k}s}$) respectively. The unusual denomination will become clear later. Is clear, by the commutation relation defined before (proof [[annihilation and creation operator commutator]]) , that

$$ [ \hat{a}_{\bar{k}s}(t), \hat{a}^\dagger_{\bar{k'}s'}(t)] = \delta_{\bar{k}\bar{k'}}\delta_{ss'}\hat{\mathbb{1}} $$

With this relation we can recast the energy operator as:

$$\hat{H} = \sum_{\bar{k}}\sum_s \frac{1}{2}\hbar\omega_k\left(\hat{a}_{\bar{k}s}\hat{a}^\dagger_{\bar{k}s}+\hat{a}^\dagger_{\bar{k}s}\hat{a}_{\bar{k}s}\right) =  \sum_{\bar{k}}\sum_s \frac{1}{2}\hbar\omega_k\left(\hat{\mathbb{1}}+2\hat{a}^\dagger_{\bar{k}s}\hat{a}_{\bar{k}s}\right) = \sum_{\bar{k}}\sum_s \hbar\omega_k\left(\hat{a}^\dagger_{\bar{k}s}\hat{a}_{\bar{k}s} + \frac{1}{2} \hat{\mathbb{1}} \right) $$

In most text, if not in almost all, the identity operator is omitted. Is now convenient also to define the following operator:

$$ \hat{N}_{\bar{k}s}  \equiv \hat{a}^\dagger_{\bar{k}s}\hat{a}_{\bar{k}s}$$

So that one can accomplish the compact form:

$$\hat{H} = \sum_{\bar{k}}\sum_s \hbar\omega_k\left(\hat{N}_{\bar{k}s} + \frac{1}{2} \right)$$

We now must see this expression respect to is physical meaning. 
The creation and destruction operator act over the so called [[Fock space]].

