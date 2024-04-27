- [ ] Rifinire la nota

Let's consider the complex-valued representation. The fact that a series exists implies that the set of functions:

$$ \phi_n(x) =  e^{\frac{2\pi i n}{L}x}$$

Constitutes an orthonormal basis in the space of the function satisfying the Dirichlet conditions. This also means that this set of function must satisfies the completeness and orthonormality conditions:

$$ \mbox{(orthonormality)}\qquad \frac{1}{L}\int_a^b dx\ \phi^*_m(x)\phi_n(x) = \frac{1}{L}\int_a^b dx\   e^{\frac{2\pi i (n-m)}{L}x} = \delta_{nm}$$

$$ \mbox{(completeness)}\qquad \frac{1}{L} \sum_{n=-\infty}^{+\infty} \phi^*_n(x)\phi_n(x')= \frac{1}{L} \sum_{n=-\infty}^{+\infty} e^{-\frac{2\pi i n}{L}(x-x')} = \delta(x-x')$$

So that, by setting in the last equation $x'=0$, we obtain: 

$$\frac{1}{L} \sum_{n=-\infty}^{+\infty} e^{-\frac{2\pi i n}{L}x} = \frac{1}{L} \sum_{m=-\infty}^{+\infty} e^{\frac{2\pi i m}{L}x} =  \delta(x)$$

Which is the Fourier series for the Dirac delta in the fundamental interval $(-\frac{1}{2}L, \frac{1}{2}L)$. But because a Fourier series is only valid for the expansion of a periodic function, it must be true that this expansion is