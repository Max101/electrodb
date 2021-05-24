const schema = {
	"model": {
		"entity": "tasks",
		"version": "1",
		"service": "taskapp"
	},
	"attributes": {
		"task": {
			"type": "string",
			"required": true
		},
		"project": {
			"type": "string",
			"required": true
		},
		"employee": {
			"type": "string",
			"required": true
		},
		"description": {
			"type": "string"
		},
		"status": {
			"type": ["open", "in-progress", "closed"] as const,
			"default": "open"
		},
		"points": {
			"type": "number",
			"required": true
		},
		"comments": {
			"type": "any"
		}
	},
	"indexes": {
		"task": {
			"pk": {
				"field": "pk",
				"facets": ["task"]
			},
			"sk": {
				"field": "sk",
				"facets": ["project", "employee"]
			}
		},
		"project": {
			"index": "gsi1pk-gsi1sk-index",
			"pk": {
				"field": "gsi1pk",
				"facets": ["project"]
			},
			"sk": {
				"field": "gsi1sk",
				"facets": ["employee", "status"]
			}
		},
		"assigned": {
			"collection": "assignments",
			"index": "gsi3pk-gsi3sk-index",
			"pk": {
				"field": "gsi3pk",
				"facets": ["employee"]
			},
			"sk": {
				"field": "gsi3sk",
				"facets": ["project", "status"]
			}
		},
		"statuses": {
			"index": "gsi4pk-gsi4sk-index",
			"pk": {
				"field": "gsi4pk",
				"facets": ["status"]
			},
			"sk": {
				"field": "gsi4sk",
				"facets": ["project", "employee"]
			}
		}
	}
} as const;

export default schema;