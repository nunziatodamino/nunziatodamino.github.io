We begin by saying that we define in the Ising model the response function as: 

$$ \frac{\partial\braket{s_i}}{\partial h_j} $$

I.e. how the average value of the spin at site $i$ changes due to a perturbation of the magnetic field at site $j$.
Note that the concept of response function is more general and is explored in the [[Linear response theory]].
First we observe the following: the spin correlation function $G_C(i,j)=\braket{s_is_j}-\braket{s_i}\braket{s_j}$ can be written as we saw in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/k-point correlation function in the Ising-like model|k-point correlation function in the Ising-like model]]:

$$
\begin{aligned}
G_C(i,j) &= \frac{1}{\beta^2\mathcal{Z}_N}\frac{\partial^2 \mathcal{Z}_N }{\partial h_ih_j} - \left(\frac{1}{\beta\mathcal{Z}_N}\frac{\partial \mathcal{Z}_N }{\partial h_i}\right)\left(\frac{1}{\beta\mathcal{Z}_N}\frac{\partial \mathcal{Z}_N }{\partial h_j}\right) = \\
&=\frac{1}{\beta^2}\left( \frac{1}{\mathcal{Z}_N}\frac{\partial^2 \mathcal{Z}_N }{\partial h_ih_j}-\frac{1}{\mathcal{Z}_N^2}\frac{\partial \mathcal{Z}_N }{\partial h_i}\frac{\partial \mathcal{Z}_N }{\partial h_j} \right)
\end{aligned}$$

Observing now that $\frac{\partial^2 \ln \mathcal{Z}_N }{\partial h_ih_j} = \frac{\partial}{\partial h_i}\left(\frac{\partial \ln \mathcal{Z}_N }{\partial h_j}\right)=\frac{\partial}{\partial h_i}\left(\frac{1}{\mathcal{Z}_N}\frac{\partial \mathcal{Z}_N }{\partial h_j}\right)= \frac{1}{\mathcal{Z}_N}\frac{\partial^2 \mathcal{Z}_N }{\partial h_ih_j}-\frac{1}{\mathcal{Z}_N^2}\frac{\partial \mathcal{Z}_N }{\partial h_i}\frac{\partial \mathcal{Z}_N }{\partial h_j}$ one concludes :

$$ G_C(i,j) = \frac{1}{\beta^2} \frac{\partial^2 \ln \mathcal{Z}_N }{\partial h_ih_j} = \frac{1}{\beta^2} \frac{\partial^2 F_N }{\partial h_ih_j} $$

So, if we return to the response function, one has:

$$ \frac{\partial\braket{s_i}}{\partial h_j} = \frac{\partial}{\partial h_j} \left( \frac{1}{\beta\mathcal{Z}_N}\frac{\partial \mathcal{Z}_N }{\partial h_i} \right) = \frac{1}{\beta}\frac{\partial^2 F_N }{\partial h_ih_j} = \beta G_C(i,j) $$

Note that $G_C(i,j) =G_C(j,i)$
