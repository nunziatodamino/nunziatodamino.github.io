We show here the possible rotational symmetries in a Bravais lattice. 
I take two atoms separated by a lattice distance $a$,  and consider a generic rotation of an angle
$$\varphi=\frac{2\pi}{n}$$
Where $n$ is called order of rotational simmetry.

![[Pasted image 20230213160824.png|400]]
We then perform 2 rotations as shown in the figure to arrive at positions P and Q. Now, if P and Q are separated by a distance a with m being an integer (i.e., they satisfy the Bravais lattice condition), it follows that the lattice is invariant under rotations of order n.
This condition holds only if:
$$ma = a + 2a\sin\left( \varphi - \frac{\pi}{2} \right)$$
$$m = 1 + 2\sin\left( \varphi - \frac{\pi}{2} \right)$$
$$m = 1 + 2\cos \varphi$$
$$\cos \varphi= \frac{m-1}{2} \qquad m\in \mathbb{Z}$$
This imply, for that fact that cosine is a bounded function:
$$|\cos \varphi| \leq 1 \qquad \Rightarrow
| \frac{m-1}{2} | \leq 1 $$
That implies $m=0, \pm 1, 2, 3$. If we then solve for $\varphi$, and subsequently for $n$, one obtains:
$$n=1,2,3,4,6$$
That is, is not possibile to have a Bravais lattice with $n=5$ order of rotational simmetry.

