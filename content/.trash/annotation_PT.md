# Annotations and Clarifications for Phase Transitions Notes

This document contains clarifications for the notes in the 'Phase transitions' directory.

---

## 1. Structure and Flow of the Notes

The notes in this section cover a wide range of topics related to phase transitions. The logical flow can be grouped as follows:

*   **General Theory:**
    *   `Ehrenfest's classification of phase transitions.md`: Introduces the classification of phase transitions based on the continuity of the free energy and its derivatives.
    *   `Order parameter.md`: Defines the concept of an order parameter.
    *   `Free energy of a finite system.md`: Discusses the decomposition of the free energy into bulk and surface terms.
    *   `Lower critical dimension.md`: Defines the lower critical dimension.

*   **Models and Symmetries:**
    *   `The O(n) model.md`: Introduces the general O(n) model, which serves as a parent model for several others.
    *   `Symmetries of notable models.md`: Discusses the symmetries of the Ising, Potts, and XY models.
    *   `Consideration on a system Hamiltonian in Statistical Mechanics.md`: Provides a general form for Hamiltonians in statistical mechanics.

*   **Specific Models and Phenomena:**
    *   `The zipper model.md`: A simple model for polymer denaturation.
    *   `Transfer matrix in the zipper model.md` and `Transfer matrix method for the single-ended zipper model.md`: Discuss the transfer matrix method for the zipper model.
    *   `The Berezinskii-Kosterlitz-Thouless (BKT) transition.md`, `Vortices in the 2D XY model.md`, `Low temperature approximation of the XY model in 2-dimensions.md`, `Free energy argument for n=1 vortices.md`, and `Spin stiffness energy.md`: These files all relate to the BKT transition in the 2D XY model.

*   **Mathematical Tools:**
    *   `Perron-Frobenius Theorem.md`: A theorem with implications for the existence of phase transitions in systems solvable by a transfer matrix.

---

## 2. Suggested Clarifications and Improvements

*   **Connection between O(n) model and specific models:** The file `The O(n) model.md` introduces the O(n) model as a generalization of the Ising, XY, and Heisenberg models. It would be beneficial to make this connection more explicit in the files for those specific models.
*   **Role of the Perron-Frobenius Theorem:** The file `Perron-Frobenius Theorem.md` states that a system whose transfer matrix satisfies the theorem's conditions cannot have a phase transition. It would be helpful to provide a brief explanation of *why* this is the case (i.e., the largest eigenvalue is non-degenerate and analytic, so the free energy is also analytic).
*   **BKT Transition:** The files related to the BKT transition are somewhat scattered. It would be beneficial to create a main file for the BKT transition that links to the other files in a logical order (e.g., starting with the low-temperature approximation, then introducing vortices, and finally discussing the free energy argument).
