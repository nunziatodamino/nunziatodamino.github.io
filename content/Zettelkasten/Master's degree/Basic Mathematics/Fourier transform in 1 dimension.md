- [ ] Finire la nota con la rappresentazione del pettine di Dirac e con la formula di somma di Poisson
- [ ] Introdurre il cambio di convenzione $2 \pi \xi \to k$
## The idea behind

Suppose we want to expand a function using the orthonormal basis:

$$ \phi_n(x) =  e^{\frac{2\pi i n}{L}x}$$

Which we already established to be a legitimate choice for a basis in an Hilbert space.
Then, if the function satisfies the Dirichlet condition for periodicity in the interval $(a,b)$, with period $L=b-a$ then is possible the expansion in [[Zettelkasten/Master's degree/Basic Mathematics/Fourier series in 1-D]], as we saw in the related note.
But what if the function is not periodic ?
The expansion can be achieved be letting $L \to +\infty$, so that the fundamental interval becomes $\mathbb{R}$. This intuitively implies that $n$ is must be uncountable, so that the series degenerates into an integral.
In order to maintain the convergence we must set $\frac{n}{L} \to \xi$ , so that $\frac{1}{L}\sum_{n={-\infty}}^{+\infty} \to \int_{\mathbb{R}}d\xi$ and we can write:

$$ f(x) = \int_\mathbb{R}e^{2\pi i x\xi}\hat{f}(\xi)d\xi \qquad \mbox{expansion formula}$$

Where also we have to consider uncountable coefficients, i.e. $f_n \to \hat{f}(\xi)$, obtained by the extension of the inversion formula:

$$ \hat{f}(\xi) = \int_\mathbb{R}  f(x) e^{-2\pi i \xi x} dx\qquad \mbox{inversion formula} $$

We can so generalize the concept of Fourier series to the so called Fourier integral, where we obtain the expansion coefficients with the inversion formula, also called the Fourier transform of the function $f(x)$.

## Mathematical properties
 
We begin by defining the Fourier transform operation and its inverse:

>[!NOTE] **Fourier transform of a $L^1(\mathbb{R})$ function and its inverse**
> 
> $$ \hat{f}(\xi)= \mathcal{F}(f(x), \xi) = \int_\mathbb{R}e^{-2\pi i x\xi}f(x)dx \qquad f(x)= \mathcal{F}^*(\hat{f}(\xi), x) = \int_\mathbb{R}e^{2\pi i x\xi}\hat{f}(\xi)d\xi$$

We now state some of its essential properties:

>[!NOTE] **Properties of the Fourier transform**
> 
> For a generic $L^1(\mathbb{R})$ function, and considering $h \in \mathbb{R}$ and $A \in \mathbb{R} / \{0 \}$:
>
> - $\mathcal{F}(f(x+h), \xi) = e^{2 \pi i h \xi}\mathcal{F}(f(x), \xi)$
> - $\mathcal{F}^*(f(x), \xi)= \mathcal{F}(f(x),- \xi)$
> - $\mathcal{F}(e^{-2 \pi i h x}f(x), \xi)=e^{2 \pi i h \xi}\mathcal{F}(f(x), \xi+h)$
> - $\mathcal{F}(f\left( \frac{x}{A} \right), \xi) = |A|\mathcal{F}(f(x), A\xi)$
> - $\mathcal{F}(\overline{f(x)}, \xi) = \overline{\mathcal{F}(f(x), -\xi)}$
>- $\frac{d^k}{d\xi^k}\mathcal{F}(f(x), \xi) = (-2\pi i)^k \mathcal{F}(x^kf(x), \xi)$
>- $\mathcal{F}(f^{(n)}(x), \xi)=(2 \pi i)^n \xi^n \mathcal{F}(f(x), \xi)$
>- $\mathcal{F}(f(x)*g(x), \xi) = \mathcal{F}(f(x), \xi)\mathcal{F}(g(x), \xi)$
>
>Also is notable the following formula, called multiplication rule:
>
>$$ \int_{\mathbb{R}} \hat{f}(\xi)g(\xi)d\xi = \int_{\mathbb{R}} {f}(t)\hat{g(t)}dt $$

Note that the transform can be extended also to function in $L^2(\mathbb{R})$, and also in the distribution space, but we will not be bothered by technical details

## Notable transforms and special formulas


