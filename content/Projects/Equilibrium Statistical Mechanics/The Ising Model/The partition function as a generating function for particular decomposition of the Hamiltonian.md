Consider a system in which the Hamiltonian can written as:

$$ \mathscr{H}(\varphi) = \mathscr{H}_0(\varphi) +f(\varphi)X  $$

Where $\mathscr{H}_0$ is an unperturbed term, $f$ denotes an intensive parameter and $X$ its extensive conjugate:

$$ \frac{\partial S}{\partial X} = - \frac{f}{T} $$

Also $\varphi$ is a particular configuration of the system.
Suppose now to evaluate the quantity , considering $\mathcal{Z}$ as the canonical partition function:

$$ \begin{aligned}
-\frac{1}{\beta}\frac{\partial \ln \mathcal{Z}}{\partial f} &= -\frac{1}{\beta\mathcal{Z}}\frac{\partial \mathcal{Z} }{\partial f} =  -\frac{1}{\beta\mathcal{Z}}\frac{\partial}{\partial f} \text{Tr}\ e^{-\beta(\mathscr{H}_0(\varphi) +f(\varphi)X)} \\&=  -\frac{1}{\beta\mathcal{Z}} \text{Tr}\frac{\partial}{\partial f}[ e^{-\beta(\mathscr{H}_0(\varphi) +f(\varphi)X)}] = \\
 &= -\frac{1}{\beta\mathcal{Z}} \text{Tr}(-\beta X) e^{-\beta(\mathscr{H}_0(\varphi) +f(\varphi)X)} = \\
 &= -\frac{1}{\mathcal{Z}} \text{Tr}\ X e^{-\beta(\mathscr{H}_0(\varphi) +f(\varphi)X)} = \braket{X} \\
\end{aligned}
$$

We obtain in the end the fundamental:

$$ -\frac{1}{\beta}\frac{\partial \ln \mathcal{Z}}{\partial f} = \braket{X} $$

This will be a useful relation in the context of the Statistical Mechanics. Moreover in this context sometimes $\mathcal{Z}$ is called generating function, or as a notation addendum, it can be found written as:

$$ -\frac{1}{\beta}\left(\frac{\partial \ln \mathcal{Z}}{\partial f}\right)_{\beta} = \braket{X} $$

To recall that the partition function is the canonical one.