
We want to prove that, in the Coulomb gauge $\nabla \cdot \bar{A}  = 0$, that 

$$
\sum_i[\hat A_i,\hat P_i^{\mathrm{tot}}]=0 , \ \text{where}\ \hat{\bar{P}}^{\text{tot}}=\hat{\bar{P}}\otimes\hat{\mathbb 1}_{\mathrm{rad}} 
$$

#### Proof

Consider

$$
\hat{\bar{A}}(\bar{r},t)
=C\bar{\varepsilon}
\left(
e^{i\bar{k}\cdot\bar{r}}\otimes\hat a
-e^{-i\bar{k}\cdot\bar{r}}\otimes\hat a^\dagger
\right).
$$

Then, by component:

$$
[\hat A_j,\hat P_i^{\mathrm{tot}}]
=C\varepsilon_j
\left(
[e^{i\bar{k}\cdot\bar{r}},\hat P_i]\otimes\hat a
-[e^{-i\bar{k}\cdot\bar{r}},\hat P_i]\otimes\hat a^\dagger
\right).
$$

Using the commutator identity $[f(\bar{r}),\hat P_i]=i\hbar\,\partial_i f(\bar{r})$, we have in our case:

$$ [e^{i\bar{k}\cdot\bar{r}},\hat P_i] = i\hbar\,ik_i e^{i\bar{k}\cdot\bar{r}} \\
=-\hbar k_i e^{i\bar{k}\cdot\bar{r}} $$

And analogously $[e^{-i\bar{k}\cdot\bar{r}},\hat P_i]=\hbar k_i e^{-i\bar{k}\cdot\bar{r}}.$
So in the end:

$$
[\hat A_j,\hat P_i^{\mathrm{tot}}]
=C\hbar\varepsilon_j
\left(
-k_i e^{i\bar{k}\cdot\bar{r}}\otimes\hat a
-k_i e^{-i\bar{k}\cdot\bar{r}}\otimes\hat a^\dagger
\right).
$$

Hence by summing over $k_i$:

$$
\begin{aligned}
\sum_i[\hat A_i,\hat P_i^{\mathrm{tot}}] &= 
-C\hbar\sum_i\varepsilon_i k_i
\left(
e^{i\bar{k}\cdot\bar{r}}\otimes\hat a
+e^{-i\bar{k}\cdot\bar{r}}\otimes\hat a^\dagger
\right)= \\
&= 
-C\hbar\ (\bar{k} \cdot \hat{\varepsilon})
\left(
e^{i\bar{k}\cdot\bar{r}}\otimes\hat a
+e^{-i\bar{k}\cdot\bar{r}}\otimes\hat a^\dagger
\right)
\end{aligned}
$$

As $$\bar{k}\cdot\bar{\varepsilon}=0\iff\bar{\nabla}\cdot\hat{\bar{A}}=0$$
We proved the lemma. 

NOTE : This lemma is operationally equivalent to :

$$\sum_i[\hat A_i,\hat P_i^{\mathrm{tot}}]=0 \iff (\hat{A}_x\hat{p}_x+ \hat{A}_y\hat{p}_y + \hat{A}_z\hat{p}_z) \otimes \hat{\bar{A}} = (\hat{p}_x\hat{A}_x+ \hat{p}_y\hat{A}_y + \hat{p}_z)\hat{A}_z \otimes \hat{\bar{A}}$$

Leading on $\mathcal{H}_{\mathrm{atom}}$ to the commutation identity:

$$ \hat{\bar A} \cdot \hat{\bar p} = \hat{\bar p} \cdot \hat{\bar A}$$