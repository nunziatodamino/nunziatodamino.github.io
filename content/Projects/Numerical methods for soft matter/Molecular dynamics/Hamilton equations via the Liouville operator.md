Let's consider the Hamilton equation of motion for a $N$ particle system:

$$ 
\begin{cases}
\dot{q}^{\alpha} = \frac{\partial H}{\partial p_{\alpha}} \\
\dot{p}^{\alpha} = - \frac{\partial H}{\partial q^{\alpha}}
\end{cases} \qquad \alpha = 1, \dots,N
$$

We recall also that, for any observable $O$:

$$ \frac{dO}{dt} = \{ O,H \} = \sum_{\alpha = 1}^N \frac{\partial O}{\partial q^{\alpha}}\frac{\partial H}{\partial p_{\alpha}} - \frac{\partial H}{\partial q^{\alpha}}\frac{\partial O}{\partial p_{\alpha}}  $$

So that is easy to see:

$$ 
\begin{cases}
\dot{q}^{\alpha} = \{ q^{\alpha}, H \} \\
\dot{p}^{\alpha} = \{ p_{\alpha}, H \}
\end{cases} \qquad \alpha = 1, \dots,N
$$

We can do better and write this in one line.
First we define the phase space element $\Gamma = (q^1, \dots, q^N, p_1, \dots, p_N) \equiv (q^{\alpha}, p_{\alpha})$. Then one can via [[Projects/Numerical methods for soft matter/Molecular dynamics/The Liouville operator|The Liouville operator]] rewrite the Hamilton equations of motion:

$$ \dot{\Gamma}=i\hat{L}\Gamma $$

These are solved easily:

$$ \Gamma(t) = e^{i\hat{L}t}\Gamma(0) $$

The unitary operator $e^{i\hat{L}t}$ is called **classical propagator**, in analogy with the quantum mechanical one.