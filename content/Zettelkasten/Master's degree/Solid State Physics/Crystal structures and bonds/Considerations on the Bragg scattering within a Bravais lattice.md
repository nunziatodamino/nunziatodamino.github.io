We want to study the condition for which 2 incoming photons ==non è per le onde in generale ?== makes constructive interference inside a [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Bravais lattice|Bravais lattice]].

![[Pasted image 20230213162454.png|400]]

For wave 1 and wave 2 to interfere constructively, the difference in their optical paths (highlighted in red in the figure) must be an integer multiple of wavelengths:

$$\Delta L = n\lambda\qquad n \in \mathbb{Z}$$

One obtains for the difference in optical path: 

$$\Delta L = \Delta L_1 +\Delta L_2 = \bar{R}\cdot\hat{k} + \bar{R}\cdot(-\hat{k}')$$

So that the interference condition becomes:

$$\bar{R} \cdot (\hat{k}-\hat{k}') = n\lambda \qquad n \in \mathbb{Z}$$

Considering the event of an elastic scattering, so that $k=k'$, one can further simplify the condition, using the fact that $k = 2\pi/\lambda \iff k\lambda=2 \pi$. We will have:

$$ \bar{R} \cdot \frac{(\bar{k}-\bar{k}')}{k} = n\lambda\quad \Rightarrow\quad\bar{R} \cdot (\bar{k}-\bar{k}') = 2\pi n$$

Is interesting to see this condition in a different way: if we multiply by the imaginary unit, and take the exponential of both side, we obtain:

$$e^{i\bar{R} \cdot (\bar{k}-\bar{k}')} = e^{2\pi i n} = 1$$

We observe that the vector $\bar{k}-\bar{k}'$ satisfy the condition $e^{i\bar{R}\cdot\bar{G}}=1$, which is the belonging criterion for the reciprocal space established by the 3-D Fourier series expansion.
So we can write:
$$\bar{G}= \bar{k}-\bar{k}'\qquad \mbox{Bragg condition}$$

This implies the fundamental result that, in a Bragg scattering experiment, one sees the reciprocal space of the crystal, not the direct one.

Is interesting to rewrite this condition in a different way. Given the Bragg condition on one hand we square it:

$$ G^2 = k^2+k'^2 - 2 \bar{k}\cdot\bar{k}'=2k^2(1-\cos\vartheta) $$

on the other we multiply by $\bar{k}$ : 

$$ \bar{k} \cdot \bar{G}=\bar{k} \cdot(\bar{k}-\bar{k}') \qquad \Rightarrow \bar{k} \cdot \bar{G}=k^2(1-cos\vartheta) $$

We can then compare the 2 results and obtain:

$$ \bar{k} \cdot \bar{G} = \frac{G^2}{2}\ \iff\ \bar{k} \cdot \hat{G} = \frac{G}{2} \qquad \mbox{Bragg condition}$$

This last result permits us to give an interesting geometrical interpretation of the Bragg condition, i.e. a wave will make Bragg scattering in a crystal if its $\bar{k}$ plotted in the crystal reciprocal space touches to border of the first Brillouin zone.

![[Pasted image 20230214095856.png|400]]
