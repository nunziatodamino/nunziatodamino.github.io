Suppose I want to evaluate for a system the fraction $N^2_2/V$ where $N^2_2$ is the number of pair of particles at a certain distance $\bar{r}$.
First is clear that we can define this as:

$$ N^2_2/V = \frac{1}{V} \int d\bar{r}' \rho_2(\bar{r}'+\bar{r},\bar{r}') $$

Where $\rho_2(\bar{r}'+\bar{r},\bar{r}')$ is a pair density function yet to be determined. Now we build said function. 
Suppose to have a fixed system, one in which the particles are frozen in time. Let's choose as reference the particle $i$ and evaluate the distance $\bar{r}$ respect to said particle. Then we will have $\sum_j\delta(\bar{r}'+\bar{r}-\bar{r}_j)\delta(\bar{r}'-\bar{r}_i)$. Now this definition must be independent respect to the initial particle choice in order to obtain the pair density. To achieve we sum over all possible configurations $\sum_{i<j}\delta(\bar{r}'+\bar{r}-\bar{r}_j)\delta(\bar{r}'-\bar{r}_i)$.
Now in reality we have a system that moves and is not frozen in time, but in general its movement is never too abrupt.
So we can define the density as a mean of the possible frozen states, considering that $\bar{r}_i$ and $\bar{r}_j$ changes over time:

$$ \rho_2(\bar{r}'+\bar{r},\bar{r}')= \braket{\sum_{i<j}\delta(\bar{r}'+\bar{r}-\bar{r}_j)\delta(\bar{r}'-\bar{r}_i)} $$

So one has:

$$ N^2_2/V = \frac{1}{V} \int d\bar{r}'\braket{\sum_{i<j}\delta(\bar{r}'+\bar{r}-\bar{r}_j)\delta(\bar{r}'-\bar{r}_i)}$$

In the hypothesis of homogeneous system this is independent from $\bar{r}'$ (if the system is homogeneous one can write the pair density as $\braket{\sum_{i<j}\delta(\bar{r}'+\bar{r}-\bar{r}_j)\delta(\bar{r}'-\bar{r}_i)}=\braket{\sum_{i<j}\delta(\bar{r}'+\bar{r}-\bar{r}_j)}\delta(\bar{r}'-\bar{r}_i)$, ==non so bene perchè, ma di fatto è questa l'unica alternativa==). 
In this way one can write:

$$ N^2_2/V = \frac{1}{V} \int d\bar{r}'\braket{\sum_{i<j}\delta(\bar{r}'+\bar{r}-\bar{r}_j)}\delta(\bar{r}'-\bar{r}_i)=\frac{1}{V} \braket{\sum_{i<j}\delta(\bar{r}+\bar{r}_i-\bar{r}_j)}$$

Finally, if one defines $\bar{r}_{ij}=\bar{r}_{i}-\bar{r}_{j}$ one has:

$$ N^2_2/V = \frac{1}{V} \braket{\sum_{i<j}\delta(\bar{r}-\bar{r}_{ij})}$$

One can then define the **pair distribution function** as:

$$ g(r) = \frac{N^2_2/V}{N^2/V^2} = \frac{V}{N^2} \braket{\sum_{i<j}\delta(\bar{r}-\bar{r}_{ij})} $$
