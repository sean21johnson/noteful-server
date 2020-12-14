--insert data into folders table
BEGIN;

INSERT INTO folders 
    (folder_id, folder_name)
    VALUES (
        '88befb55-ecdd-445b-83c0-6c9b7b0a5a30',
        'Important'
    );

INSERT INTO folders 
    (folder_id, folder_name)
    VALUES (
        'c9a2cf85-bd4a-4940-ad2a-c00afd81d6ce',
        'Helpful'
    );

INSERT INTO folders 
    (folder_id, folder_name)
    VALUES (
        '226df7db-9539-4805-af8f-ce778b2edb43',
        'Profound'
    );

--insert data into notes table
INSERT INTO notes 
    (note_id, note_name, modified, folder_id, content)
    VALUES (
        '7eeee8e3-c2b3-41e7-bbad-89cb78e3baf6',
        'Dogs',
        '2020-12-09T19:18:09.242Z',
        '88befb55-ecdd-445b-83c0-6c9b7b0a5a30',
        'Dogs are fun animals'
    );

INSERT INTO notes 
    (note_id, note_name, modified, folder_id, content)
    VALUES (
        '04e8f004-d211-442c-accb-d12204263413',
        'Cats',
        '2020-12-09T19:18:09.242Z',
        '88befb55-ecdd-445b-83c0-6c9b7b0a5a30',
        'Cats are fun animals'
    );

INSERT INTO notes 
    (note_id, note_name, modified, folder_id, content)
    VALUES (
        '32e1f108-480c-448e-975a-a44cfaa8d128',
        'Birds',
        '2020-12-09T19:18:09.242Z',
        'c9a2cf85-bd4a-4940-ad2a-c00afd81d6ce',
        'Birds are fun animals'
    );

INSERT INTO notes 
    (note_id, note_name, modified, folder_id, content)
    VALUES (
        'be128483-c0d3-4617-a84d-b1c24c559029',
        'Bees',
        '2020-12-09T19:18:09.242Z',
        'c9a2cf85-bd4a-4940-ad2a-c00afd81d6ce',
        'Bees are fun animals'
    );

INSERT INTO notes 
    (note_id, note_name, modified, folder_id, content)
    VALUES (
        '907cf8f2-fbd1-42ef-8b7b-3f0ff1ea70c4',
        'Lizards',
        '2020-12-09T19:18:09.242Z',
        '226df7db-9539-4805-af8f-ce778b2edb43',
        'Lizards are fun animals'
    );

INSERT INTO notes 
    (note_id, note_name, modified, folder_id, content)
    VALUES (
        'b8343830-e8fe-4392-9174-bfc0d68a9237',
        'Snakes',
        '2020-12-09T19:18:09.242Z',
        '226df7db-9539-4805-af8f-ce778b2edb43',
        'Snakes are fun animals'
    );

COMMIT;
