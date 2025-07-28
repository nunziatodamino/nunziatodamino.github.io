Consider a set of coupling constants in a [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Classification of fixed points in RG theory|basin of attraction]]. We want to study the expansion of a RG transformation around a fixed point. Consider than:

$$ \bar{K}' = \bar{K}^* + \delta\bar{K} $$

With $\delta\bar{K}$ such that $\bar{K}'$ lies in the basin of attraction of $\bar{K}^*$. Then we consider a component of the RG transformation $(\mathscr{R}_l)_j:\mathbb{R}^N \to \mathbb{R}$, with $j=1, 2, \dots, N$ . Given that each component is analytic, it can be expanded in Taylor series:

$$[\mathscr{R}_l(\bar{K}^* + \delta\bar{K})]_j = [\mathscr{R}_l(\bar{K}^*)]_j + \sum_i\left(\frac{\partial([\mathscr{R}_l(\bar{K}')]_j)}{\partial\bar{K}'_i}\right)_{|\bar{K}' = \bar{K}^*} \delta\bar{K}_i  + \mathcal{O}(||\delta\bar{K}||^2)$$

Then, considering $\bar{K}''$ the state after the decimation of $\bar{K}'$, and using the fact that $\bar{K}^*$ is a fixed point for the decimation, one can write more simply, by components:

$$\bar{K}_j''=\bar{K}_j^* + \sum_i\left(\frac{\partial\bar{K}''_j }{\partial\bar{K}'_i }\right)_{|\bar{K}' = \bar{K}^*} \delta\bar{K}_i  + \mathcal{O}(||\delta\bar{K}||^2)$$

By approximating at the first order, we can define:

$$ (\Pi^{(l)})_{ij} =   \left(\frac{\partial\bar{K}''(\bar{K}')_j }{\partial\bar{K}'_i }\right)_{|\bar{K}' = \bar{K}^*} $$

This it none other than the Jacobian matrix of the transformation between the coupling constants and depends of course from the type of problem.
The superscript $l$ is to emphasize that the underlying decimation is of size $l$.

The only thing we can say is that:
- Given we have an endomorphism on $\mathbb{R}^N$, this is a square matrix of order $n$
- Is in general not symmetric, one has to distinguish between left and right eigenvectors;
2. Is not always diagonalizable or sometimes its eigenvalues can be complex.

**For most physical systems, however, we assume is symmetric so that can be diagonalized and the eigenvalues are real.**

### Discussion of the eigenvalues of the Jacobian matrix

Suppose the Jacobian of the transformation is symmetric, so that is diagonalizable and the matrix admits all real eigenvalues.
We call $\lambda_l^{(\sigma)}$ the $\sigma$-th eigenvalue and with $\bar{e}_l^{(\sigma)}$ the $\sigma$-th eigenvector associated with a decimation of size $l$.
Then we can write the eigenvalue equation:

$$ \Pi^{(l)}\bar{e}^{(\sigma)}_l = \lambda^{(\sigma)}_l\bar{e}^{(\sigma)}_l $$

Or equivalently

$$ \sum_i(\Pi^{(l)})_{ij}(\bar{e}^{(\sigma)}_l)_i = \lambda^{(\sigma)}_l(\bar{e}^{(\sigma)}_l)_j $$

Or using Einstein summation convention:

$$ (\Pi^{(l)})_{ij}(\bar{e}^{(\sigma)}_l)_i = \lambda^{(\sigma)}_l(\bar{e}^{(\sigma)}_l)_j $$

Now we observe that the Jacobian satisfies the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/RG transformation|semigroup property]]:

$$ \Pi^{(l)}\Pi^{(l')} = \Pi^{(ll')} $$

Consequently one can show that any eigenvalue:

$$ \lambda^{(\sigma)}_l\lambda^{(\sigma)}_{l'} = \lambda^{(\sigma)}_{ll'} \qquad \forall \sigma $$

Finally this leads to a functional equation that can be solved if we think this eigenvalues as function of $l$.
This leads to the result:

$$ \lambda^{(\sigma)}_l = l^{y_{\sigma}} $$

Where $y_{\sigma}$ is a number yet to be determined. This sequence of facts is proved [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/Identity in Ising model (optional)]].

### Action of the operator $\Pi$ on the vector $\delta\bar{K}$

Suppose all behaves well, i.e. the matrix $\Pi$ is symmetric so that the set of its eigenvectors is orthonormal.
Then we can use this set as a basis to expand the increment $\delta\bar{K}$:

$$\delta\bar{K} = \sum_{\sigma} (\delta\bar{K} \cdot\bar{e}^{(\sigma)}_l)\bar{e}^{(\sigma)}_l = \sum_{\sigma} a_l^{(\sigma)} \bar{e}^{(\sigma)}_l  $$

Then if we apply the operator $\Pi$ to this increment (as is a matrix is a linear operator):

$$\Pi\delta\bar{K} = \sum_{\sigma} a_l^{(\sigma)} \Pi \bar{e}^{(\sigma)}_l = \sum_{\sigma} a_l^{(\sigma)} \lambda^{(\sigma)}_l\bar{e}^{(\sigma)}_l = \sum_{\sigma} l^{y_\sigma} a_l^{(\sigma)} \bar{e}^{(\sigma)}_l  $$

So we have the following situation: if we consider the increment $\delta\bar{K}$ and apply the operator $\Pi$ its components either grow ($y_\sigma >0$), shrink ($y_\sigma <0$) or stay the same ($y_\sigma =0$) respect the original increment.
This condition can be related equivalently on the eigenvalues.
Suppose to order the eigenvalues in descending order:

$$ \lambda_l^{(1)} \geq \lambda_l^{(2)} \geq \dots \geq \lambda_l^{(N)} $$

Then we can classify each eigenvalues according to the effect that it has on the component of $\delta\bar{K}$:

- $\lambda_l^{(\sigma)} > 1$ or ($y_\sigma >0$) we call this **relevant eigenvalue**.
-  $\lambda_l^{(\sigma)} < 1$ or ($y_\sigma <0$) we call this **irrelevant eigenvalue**.
-  $\lambda_l^{(\sigma)} = 1$ or ($y_\sigma =0$) we call this **marginal eigenvalue**.

This is important as now we know how the operator $\Pi$ behaves when applied to $\bar{K}^* + \delta\bar{K}$.
The point $\bar{K}^*$ is a fixed point, so it stays the same. For the vector $\delta\bar{K}$ we have the situation above: if we are in the direction associated to the relevant eigenvalue (i.e. on the associated eigenvector), the vector grows in magnitude and we go **away** from the critical point.
Conversely if we are in the direction associated to the irrelevant eigenvalue (i.e. on the associated eigenvector), the vector shrinks in magnitude and we go **towards** the critical point.
The marginal eigenvectors doesn't change anything.

From this we can state the following:
- **Stable manifold**: The set of irrelevant eigenvectors will form a basis for the local basin of attraction for the fixed point $\bar{K}^*$. So we can conclude that its dimension is the number of said eigenvectors.
- **Unstable manifold** :The set of relevant eigenvectors forms a space that is complementary to the basin of attraction, with co-dimension $C$ equal to the number or relevant eigenvectors 
- **Center manifold** : The set spanned by the marginal eigenvectors. If we end in this manifold we have to move either in the irrelevant or relevant direction, or we will stay forever inside.

By construction all these manifold are **mutually orthogonal** and their dimension sums up to N.

#### A note on notation

- Notation for the decimation: one finds in books instead of $[\mathscr{R}_l(\bar{K}^* + \delta\bar{K})]_j$ the equivalent, yet confusing $(\mathscr{R}_l)_j(\bar{K}^* + \delta\bar{K})_j$. This last notation can be easily misinterpreted, as we take the component of the output and the input simultaneously. This cannot happen because the reduction $\mathscr{R}_| :\mathbb{R} \to \mathbb{R}^N$ is ill-defined, as physically we are trying to decimate a system based on a $1/N$ of the information on the coupling constants without magically obtain the same result (which is of course non-sense).
- Notation on the eigenvalue classification: In textbooks on find the definitions in absolute values, e.g. $|\lambda_l^{(\sigma)}| > 1$, etc. At this stage this is notation is unjustified, as all eigenvalues are positive and real. But in the future, on more complicated systems, one can have negative eigenvalues and for the analysis of the stability will matter only the magnitude of the eigenvalue, not the sign. This is way one find this notation in literature. Given that we are restrained to the symmetric situation this notation is simply redundant.

