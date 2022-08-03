USE `db`;

SET
  FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `movie`;

TRUNCATE TABLE `character`;

TRUNCATE TABLE `movie_character`;

SET
  FOREIGN_KEY_CHECKS = 1;

INSERT INTO
  `movie` (`id`, `name`)
VALUES
  (1, 'Episode IV - A New Hope'),
  (2, 'Episode V - The Empire Strikes Back'),
  (3, 'Episode VI - Return of the Jedi'),
  (4, 'Episode I - The Phantom Menace'),
  (5, 'Episode II - Attack of the Clones'),
  (6, 'Episode III - Revenge of the Sith'),
  (7, 'Episode VII - The Force Awakens'),
  (8, 'Episode VIII - The Last Jedi'),
  (9, 'Episode IX - The Rise of Skywalker');

INSERT INTO
  `character` (`id`, `name`)
VALUES
  (1, 'C-3PO'),
  (2, 'R2D2'),
  (3, 'Luke Skywalker'),
  (4, 'Dart Vader')