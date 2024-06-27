A reciprocal lattice space is defined in virtue of the fact that is possible to associate to every periodic function over a [[Projects/Solid State Physics/Crystal structures and bonds/Bravais lattice|Bravais lattice]] a reciprocal lattice with a [[Fourier Series in 3-D]]:

>[!iinfo] **Reciprocal space**
We define the reciprocal lattice of a Bravais lattice with primitive vectors $\bar{a}_1,\bar{a}_2,\bar{a}_3$ and unit cell volume $V_u$, the set of vectors: 
$$\bar{G} = n'\ \bar{b}_1+m'\ \bar{b}_2+l'\ \bar{b}_3 \qquad n',m',l' \in \mathbb{Z}$$
Where $\bar{b}_1,\bar{b}_2,\bar{b}_3$ are primitive vectors constructed using the following definitions: 
$$ \bar{b}_1 = \frac{2 \pi }{V_u} (\bar{a}_2 \times\bar{a}_3) \qquad \bar{b}_2 = \frac{2 \pi }{V_u} (\bar{a}_3 \times\bar{a}_1) \qquad \bar{b}_3 = \frac{2 \pi }{V_u} (\bar{a}_1 \times\bar{a}_2) $$


It is immediately clear that the reciprocal lattice is itself (mathematically) a Bravais lattice. 

The primitive vector set is built with the following identity in consideration: 

$$\bar{b}_i \cdot \bar{a}_j= 2 \pi \delta_{ij}$$So that it holds :

$$e^{i(\bar{R}\cdot\bar{G})} = 1$$

This is specifically done for mathematical consistency, in order to permit use to expand in Fourier series function over a Bravais lattice.

>[!info] **Historical info**
>This is another case in which argument presentation doesn't follow historical order. 
>We now present: Bravais lattice, reciprocal lattice, [[Zettelkasten/Basic Mathematics/Fourier Series in 3-D|Fourier series on Bravais lattice]], when the discovery order is on the other hand Bravais lattice, Fourier series on Bravais lattice, reciprocal lattice. 
>The reciprocal lattice space is invented only on the basis that the Fourier series can be expanded in that basis.

The unit cell volume of the reciprocal lattice $V'_u$ is related to the unit cell volume of the direct space by the relationship: 

$$ V'_u = \frac{(2 \pi )^d}{V_u} $$

Where $d$ is the dimension of the direct lattice, in our case $d=3$.
