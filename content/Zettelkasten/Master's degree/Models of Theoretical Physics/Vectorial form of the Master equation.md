One can write the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Master equation]]:

$$ \partial_t \mathbb{P}(m\,t|m_0t_0) =  \sum_{m' \in E} \left[\mathcal{T}_t(m|m')\mathbb{P}(m',t|m_0,t_0)- \mathcal{T}_t(m'|m)\mathbb{P}(m,t|m_0,t_0)\right] $$

In the following vectorial form:

>[!info] **Vectorial form of the Master equation**
>
>$$\partial_t \bar{\mathbb{P}}(t) = - H_{t} \bar{\mathbb{P}}(t)$$
>
>Where $\bar{\mathbb{P}}(t) = (\{\mathbb{P}(m\,t|m_0t_0) \}_{m\in E})^t$ and $H_t$ is a square matrix of order $n = \text{card}(E)$ with elements:
>
>$$ (H_t)_{mm'} = \mathcal{T}_t(m|m') - \delta_{mm'} \sum_{k\in E} \mathcal{T}_t(k|m) $$

When $H_t$ doesn't depend explictly on time, one can solve the problem by using the left and right eigenvalues of $H_t$.
