 We begin by evaluating the correlation function between spins. For what we mean see [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Additional material/Rumors and legends about the correlation function|Rumors and legends about the correlation function]]
We have, for each distance between the sites:

$$ G_c(i,j)= \braket{s_is_j}_c = \braket{s_is_j} - \braket{s_i}\braket{s_j}  $$

Using what we derived in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/k-point correlation function in the Ising-like model|k-point correlation function in the Ising-like model]] :

$$ G_c(i,j)= \frac{1}{\beta^2\mathcal{Z}_N}\frac{\partial^2 \mathcal{Z}_N }{\partial H_iH_j} - \frac{1}{\beta^2\mathcal{Z}^2_N}\frac{\partial \mathcal{Z}_N }{\partial H_j} \frac{\partial \mathcal{Z}_N }{\partial H_j} $$

Now, we observe that : $\frac{\partial^2 \ln \mathcal{Z}_N }{\partial H_iH_j} =\frac{\partial}{\partial H_i}\left(\frac{\partial \ln \mathcal{Z}_N }{\partial H_j}\right) = \frac{\partial}{\partial H_i}\left( \frac{1}{\mathcal{Z_N}} \frac{\partial\mathcal{Z}_N }{\partial H_j}\right) = \frac{\partial}{\partial H_i}\left( \frac{1}{\mathcal{Z_N}} \frac{\partial\mathcal{Z}_N }{\partial H_j}\right) =  - \frac{1}{\mathcal{Z}^2_N}\frac{\partial \mathcal{Z}_N }{\partial H_j} \frac{\partial \mathcal{Z}_N }{\partial H_j} + \frac{1}{\mathcal{Z}_N}\frac{\partial^2 \mathcal{Z}_N }{\partial H_iH_j}$, so that:

$$ G_c(i,j)= \frac{1}{\beta^2}\frac{\partial^2 \ln \mathcal{Z}_N }{\partial H_iH_j} $$

Note that even if we consider the expression without magnetic field:

$$ G_c(i,j)_{|H_i = 0}= \frac{1}{\beta^2}\frac{\partial^2 \ln \mathcal{Z}_N }{\partial H_iH_j}_{|H_i = 0} $$

Given also that the average magnetization in site $i$ can be [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/Order parameter in the Ising model|defined]] also by : $\frac{1}{\beta} \frac{\partial \ln \mathcal{Z}}{\partial H_i} = \braket{s_i} \equiv m_i$, then:

$$ G_c(i,j)= \frac{1}{\beta}\frac{\partial m_i }{\partial H_j} $$

Then we obtain by reordering:

$$ \beta G_c(i,j)= \frac{1}{\beta}\frac{\partial^2 \ln \mathcal{Z}_N }{\partial H_iH_j} =  \frac{\partial m_i }{\partial H_j} $$

Which is called **1$^{st}$ form of the fluctuation-response relation**.
This can be rewritten respect to the magnetic susceptibility.
First we define:

$$ \chi_{ij} = \frac{\partial m_i }{\partial H_j} $$

**This is the magnetic susceptibility at site $i$ due to a field perturbation at site $j$.**
So is clear:

$$\chi_{ij} = \beta G_c(i,j) $$

Then, for the **magnetic susceptibility at site $i$ due to a field perturbation from all sites is $\sum_j \chi_{ij}$**

$$\sum_j \chi_{ij} = \sum_j\beta G_c(i,j) $$

Finally the **total system magnetic susceptibility is $\sum_i\sum_j \chi_{ij}$**

$$\sum_i\sum_j \chi_{ij} = \chi = \sum_i \sum_j\beta G_c(i,j) $$

One then, if wants, define the **magnetic susceptibility per spin** as:

$$ \chi_{spin} = \frac{\chi}{N} = \frac{\beta}{N}\sum_i \sum_j G_c(i,j) $$

**Note that in some text is not specified if the magnetic susceptibility is per spin or total, is implied (of course, you have to remember this is crazyland)**