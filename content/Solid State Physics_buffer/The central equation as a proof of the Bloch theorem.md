For the sake of readability, let us recall the statement of the Bloch theorem.

>[!info] Bloch Theorem
Hp. Consider the system defined by the following Hamiltonian:
$$ \hat{H}_{atomic} = \frac{\hat{p}^2}{2m} + \hat{V}(\bar{r}) \qquad \hat{V}(\bar{r}) = \hat{V}(\bar{R}+\bar{r})\qquad\forall\bar{R} \in B.L.$$
This represents a problem with a periodic potential in a Bravais lattice.
Th. For this type of problem, the following facts hold:
>1) The wave vector $\bar{k}=(k_x, k_y, k_z)$ is a good quantum number for classifying the solutions of the time-independent Schrödinger equation, that is:
$$ \hat{H}\Psi_{\bar{k}}(\bar{r}) = E_{\bar{k}}\Psi_{\bar{k}}(\bar{r}) $$
Furthermore, the wave function is periodic in $\bar{k}$ for every $\bar{k}$ belonging to the first Brillouin zone:
$$ \Psi_{\bar{k}}(\bar{r})\ \text{is periodic in } \bar{k},\ \forall\bar{k} \in B.Z. $$
>2) The solutions have the following property:
$$  \Psi_{\bar{k}}(\bar{r})=u_{\bar{k}}(\bar{r})e^{i\bar{k}\cdot\bar{r}}  $$
Here, $\bar{u}_{\bar{k}}(\bar{r})$ is periodic in $\bar{r}$ with the same periodicity as the potential.

Proof.  We begin by expanding the eigenstate of the Hamiltonian in Fourier series.
Despite the eigenstate not being periodic, we can use the following fact: any function that satisfies the Born-von Karman conditions can be expanded in a basis of plane waves subject to the same periodic condition.
These plane waves are of the form $\varphi(\bar{r}) = e^{i\bar{q}\cdot\bar{r}}$, where $\bar{q}$ is a wavevector that satisfies the conditions described in [[Wavevectors discretisation in the band model]].

We then obtain from the expansion:

$$ \Psi_{\bar{k}}(\bar{r}) = \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} $$

We also expand in Fourier series the potential. This is easier, due to the fact that is a periodic function over a Bravais lattice, so:

$$V(\bar{r}) = \sum_{\bar{G}}V_{\bar{G}} e^{i\bar{G}\cdot\bar{r}} $$

Where $\bar{G}$ are vectors in the reciprocal space.
We now use these expansions in the Hamiltonian:

$$\begin{aligned} \frac{-\hbar^2}{2m}\nabla^2\Psi_{\bar{k}}(\bar{r}) + V(\bar{r})\Psi_{\bar{k}}(\bar{r})  &= E_{\bar{k}} \Psi_{\bar{k}}(\bar{r})
\\ \frac{-\hbar^2}{2m}\nabla^2 \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} + \sum_{\bar{G}}V_{\bar{G}} e^{i\bar{G}\cdot\bar{r}} \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}}  &= E_{\bar{k}}  \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} 
\\ \frac{-\hbar^2}{2m}\sum_{\bar{q}}C_{\bar{q}} (-q^2) e^{i\bar{q}\cdot\bar{r}} +\sum_{\bar{q}} \sum_{\bar{G}}C_{\bar{q}}V_{\bar{G}} e^{i(\bar{G}+\bar{q})\cdot\bar{r}}    - E_{\bar{k}}  \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} &=0 \end{aligned}$$

Now we recast $\bar{q}' = \bar{q} + \bar{G}$, in order simplify the second sum. Note that the summation over $q$ becomes over $q'$ and not over $q'-G$ because of the presence of the $G$ summation.

$$ \frac{-\hbar^2}{2m}\sum_{\bar{q}}C_{\bar{q}} (-q^2) e^{i\bar{q}\cdot\bar{r}} +\sum_{\bar{q}'} \sum_{\bar{G}}C_{\bar{q}'-\bar{G}}V_{\bar{G}} e^{i\bar{q}'\cdot\bar{r}}    - E_{\bar{k}}  \sum_{\bar{q}}C_{\bar{q}} e^{i\bar{q}\cdot\bar{r}} =0 $$

I can then relabel $q' \to q$ and put all under one summation

$$\sum_{\bar{q}} e^{i\bar{q}\cdot\bar{r}}\left( \frac{-\hbar^2}{2m}C_{\bar{q}} (-q^2) + \sum_{\bar{G}}C_{\bar{q}-\bar{G}}V_{\bar{G}}- E_{\bar{k}} C_{\bar{q}} \right) =0 $$

Which is true only if:

$$\begin{aligned} \frac{q^2\hbar^2}{2m}C_{\bar{q}}  + \sum_{\bar{G}}C_{\bar{q}-\bar{G}}V_{\bar{G}}- E_{\bar{k}} C_{\bar{q}}&=0
\\\left(\frac{q^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{\bar{q}} + \sum_{\bar{G}'}C_{\bar{q}-\bar{G}'}V_{\bar{G}'}&=0 \end{aligned}$$

We also relabeled $\bar{G} \to \bar{G}'$ for future easiness.
This is called **central equation in most books**.

One can continue and write :

$$\bar{q} = \bar{k} - \bar{G}$$

Where $\bar{k}$ lies in the first Brillouin zone, and $\bar{G}$ lies in the reciprocal space. This decomposition can always be found (or also the equivalent $\bar{q} = \bar{k} + \bar{G}$ ) as seen in the particular example shown in the picture for the reciprocal space of a square lattice:

![[Pasted image 20230630164756.png|300]]

We hence find:

$$\left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} - \bar{G}-\bar{G}'}V_{\bar{G}'}=0$$

We propose in the summation the following variable change : $\bar{G}'' = \bar{G}'+\bar{G}$ so that one can write:

$$\left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}''}C_{ \bar{k} -\bar{G}''}V_{\bar{G}''-\bar{G}}=0$$

Finally, by relabeling $\bar{G}'' \to  \bar{G}'$ we obtain the final expression:

$$\left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} -\bar{G}'}V_{\bar{G}'-\bar{G}}=0$$

That is called central equation in our course.

>[!info] Conventions
>One can find the 3 equivalent form in literature for the central equation:
>
>$$ \left(\frac{k^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{\bar{k}} + \sum_{\bar{G}'}C_{\bar{k}-\bar{G}'}V_{\bar{G}'}=0 $$
>$$\left(\frac{( \bar{k} - \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} - \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} -\bar{G}'}V_{\bar{G}'-\bar{G}}=0$$
>$$\left(\frac{( \bar{k} + \bar{G})^2\hbar^2}{2m} - E_{\bar{k}}\right)C_{ \bar{k} + \bar{G}} + \sum_{\bar{G}'}C_{ \bar{k} +\bar{G}'}V_{\bar{G}'-\bar{G}}=0$$
>
>We will take the middle one as the principal one.
>


If $\bar{k}$  is a value belonging to the first Brillouin zone then I have a system of $N$ linear equations (one for each possible value of $k$) in the coefficients $C_{k-G}$ as the vector $\bar{G}$ varies in the reciprocal lattice.
Otherwise if $\bar{k}$ can span over all the reciprocal lattice, the equations becomes infinite.

We can write this equation also in [[Matricial form of the central equation|matricial form]], and from this description is easier to define for the solid a **band structure**. 
In this description an electron state is described by the couple $\{n, k\}$, i.e. by a band index and the wavenumber respectively. 

Now we are all set to conclude the proof of the Bloch Theorem.
Given an electron state $\{n, k\}$ , there exist coefficients $C_{k-G}$ that satisfy the central equation, and these coefficients are necessarily the Fourier coefficients of the wave function that so