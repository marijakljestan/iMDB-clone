INSERT INTO actor(actor_id, first_name, last_name)
VALUES (nextval('actor_seq_gen'), 'Marlon', 'Brando'),
       (nextval('actor_seq_gen'), 'Robert', 'De Niro');

INSERT INTO crew_member(crew_member_id, first_name, last_name)
VALUES (nextval('crew_member_seq_gen'), 'Mario', 'Puzo'),
       (nextval('crew_member_seq_gen'), 'Francis Ford', 'Copola');

INSERT INTO movie(movie_id, average_grade, country_of_origin, cover_image, description, duration_in_minutes, name, storyline, year)
VALUES (nextval('movie_seq_gen'), 9.2, 'USA', '', 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.', 175, 'The Godfather', 'The Godfather "Don" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter''s wedding. Michael, Vito''s youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don''s influence for the same, Vito refuses to do it. What follows is a clash between Vito''s fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.', 1972);

INSERT INTO movie_crew(crew_member_id, movie_id)
VALUES (1,1),
       (2,1);

INSERT INTO movie_genres(movie_id, genre)
VALUES (1, 1),
       (1, 2);

INSERT INTO movie_role(role_id, role_name, actor_id, movie_id)
VALUES (nextval('role_seq_gen'), 'Don Vito Corleone', 1, 1),
       (nextval('role_seq_gen'), 'Michael Corleone', 2, 1);