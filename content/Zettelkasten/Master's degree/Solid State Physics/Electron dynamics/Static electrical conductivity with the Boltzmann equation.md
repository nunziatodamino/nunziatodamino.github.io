Suppose we want to study the electrical conductivity in the same way we studied the [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Heat conduction by phonons with the Boltzmann equation|heat conduction]], i.e. as an effect of perturbing the equilibrium distribution.
So again we will use the [[Zettelkasten/Master's degree/Basic Physics/Boltzmann transport equation|Boltzmann transport equation]], this time reformulated in order to work in the k-space.
We assume also again the time relaxation ansatz, so that the perturbed distribution is:

$$ f=f_0+f_1 $$ 
Where $f_0$ is the thermal equilibrium distribution, i.e the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Additional material/Fermi-Dirac statistics|Fermi-Dirac distribution]].
Now we want to solve the Boltzmann equation in the static limit $(\frac{\partial f}{\partial \bar {r}}=0)$ :


$$  - \frac{\partial f}{\partial \bar{k}} \cdot\frac{e\bar{E}}{\hbar} + \frac{\partial f}{\partial t} = - \frac{f-f_0}{\tau} $$

And specifically we are interested at the steady states $(\frac{\partial f}{\partial t}=0)$  so to obtain:

$$  - \frac{\partial f}{\partial \bar{k}} \cdot\frac{e\bar{E}}{\hbar} = - \frac{f-f_0}{\tau} $$

Now we use the fact that $f=f_0+f_1$ and $f_1$ is a small perturbation, so that its derivative respect to $k$ will be small respect the $f_0$ one. We then obtain:

$$  - \frac{\partial f_0}{\partial \bar{k}} \cdot\frac{e\bar{E}}{\hbar} = - \frac{f_1}{\tau} \qquad \iff \qquad f_1 = \tau\frac{\partial f_0}{\partial \bar{k}} \cdot\frac{e\bar{E}}{\hbar} $$

Before continuing is interesting to make a detour. We now have, as the perturbed $f$:

$$ f = f_0 + \tau\frac{\partial f_0}{\partial \bar{k}} \cdot\frac{e\bar{E}}{\hbar} $$

Suppose now to consider the function $f_0(\bar{k}+\frac{e\tau}{\hbar}\bar{E})$ and to expand it in Taylor series , so that we are assuming that $\frac{e\tau}{\hbar}|\bar{E}|<<1$ (notice that this is generally verified in ordinary situations, where $e\tau|\bar{E}|<<\hbar k_F$):

$$f_0\left(\bar{k}+\frac{e\tau}{\hbar}\bar{E}\right) = f_0(\bar{k}) + \tau\frac{\partial f_0(\bar{k})}{\partial \bar{k}} \cdot\frac{e\bar{E}}{\hbar} + \mathcal{O}\left( \frac{e\tau E}{\hbar} \right)^2 $$

So that, if we cut the expansion at the first order, we can say that:

$$ f\simeq f_0\left(\bar{k}+\frac{e\tau}{\hbar}\bar{E}\right) $$

We can then affirm the following. The application of a low electric field perturbs the Fermi sphere by a rigid shift $-\frac{e\tau}{\hbar}\bar{E}$

![[Images/Static electrical conductivity with the Boltzmann equation_fermi sphere.png|500]]

We are finally able to derive the general expression for the current density.
We have, by definition

$$ \bar{J} = -2 \frac{e}{V}\sum_k f(\bar{k})\bar{v}(\bar{k}) $$

Where in this context $f(\bar{k})$ assumes the role of velocity distribution. We have then:

$$ \bar{J} = -2 \frac{e}{V}\sum_k \left( f_0 + \tau\frac{\partial f_0}{\partial \bar{k}} \cdot\frac{e\bar{E}}{\hbar} \right)\bar{v}(\bar{k}) = -2 \frac{e}{V}\sum_k  \tau\frac{\partial f_0}{\partial \bar{k}} \cdot\frac{e\bar{E}}{\hbar}\bar{v}(\bar{k}) $$

We use here the fact that in equilibrium we have no electrical conductivity:

$$ \bar{J} = -2 \frac{e}{V}\sum_k f_0(\bar{k})\bar{v}(\bar{k}) =0$$

This, other than by intuition, is due to symmetry arguments. We are summing over a symmetric domain a product of an even function ($f_0(\bar{k})$ is defined trough the even energy function $\mathcal{E}(\bar{k})$, so that we can imply $f_0(\bar{k})=f_0(-\bar{k}))$ and an odd function $(\bar{v}(\bar{k}) = -\bar{v}(-\bar{k}))$ so that the total function is odd, and then the result is 0.
We restrict now ourselves to a reference frame in which $\bar{E} = (E,0,0)^t$, so that our expressions becomes:

$$ J_x = -2 \frac{e}{V}\sum_k  \tau\frac{\partial f_0}{\partial k_x} \frac{e E_x}{\hbar}v_x(\bar{k}) $$

Now, given the fact that the Fermi-Dirac distribution is defined trough the energy function $\mathcal{E}(\bar{k})$ we use the chain rule:

$$ J_x = -2 \frac{e}{V}\sum_k  \tau\frac{\partial f_0}{\partial \mathcal{E}}\frac{\partial\mathcal{E}(\bar{k})}{\partial k_x} \frac{e E_x}{\hbar}v_x(\bar{k}) $$

Now we assume the hypothesis of the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Free electron model for metals (Sommerfeld model)|Free electron model for metals (Sommerfeld model)]], so that we can write $\mathcal{E}(\bar{k}) = \frac{\hbar^2}{2m}(k_x^2+k_y^2+k_z^2)$, so that we obtain by the derivative:

$$ J_x = -2 \frac{e}{V}\sum_k  \tau\frac{\partial f_0}{\partial \mathcal{E}}\frac{\hbar^2}{m} k_x\frac{e E_x}{\hbar}v_x(\bar{k}) = -2 \frac{e^2}{V}\sum_k  \tau\frac{\partial f_0}{\partial \mathcal{E}}  E_xv^2_x(\bar{k})$$

Where we used the fact that $\frac{\hbar k_x}{m}=v_x$. 
Now we use the space isotropy hypothesis, for which $v_x^2=v_y^2=v_z^2 \to v^2_x = \frac{1}{3}v^2$. This helps us because in the free electron model we can view $v^2$ as a function of the energy.

$$\mathcal{E}(\bar{k}) = \frac{\hbar^2}{2m}(k_x^2+k_y^2+k_z^2) \to \mathcal{E} = \frac{m}{2}(v_x^2+v_y^2+v_z^2)  \to v^2=v^2(\mathcal{E})= \frac{2\mathcal{E}}{m}$$

Moreover we observe that the derivative of the Fermi-Dirac distribution when $T\neq0$ is non zero only in a neighborhood of the Fermi energy. So that we can approximate $\frac{\partial f_0}{\partial \mathcal{E}} \sim -\delta(\mathcal{E}-\mathcal{E}_F)$.
Now, by  using the formal substitution $\sum_{\bar{k}} \to \int d\mathcal{E} D(\mathcal{E})$ we can evaluate the expression:

$$\begin{aligned} J_x &=\frac{2}{3} \frac{e^2}{V}\int d\mathcal{E} D(\mathcal{E})  \tau\delta(\mathcal{E}-\mathcal{E}_F)  E_xv^2(\mathcal{E})= \frac{2}{3} \frac{e^2}{V} \tau D(\mathcal{E}_F)  E_xv^2(\mathcal{E}_F) = \\

&= \frac{e^2}{V} \frac{N}{\mathcal{E}_F} \tau   E_x\frac{2\mathcal{E}_F}{m} = \frac{ne^2\tau}{m} E_x

\end{aligned} $$

This permits us to define the electrical conductibility as:

$$ \sigma = \frac{ne^2\tau}{m} $$


