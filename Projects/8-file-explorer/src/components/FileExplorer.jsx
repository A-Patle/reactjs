import { useState } from 'react';
import {
  Folder,
  FolderOpen,
  InsertDriveFile,
  Add,
  Edit,
  Delete,
} from '@mui/icons-material';
import { Box, IconButton, Typography, Collapse } from '@mui/material';

const FileExplorer = ({
  explorer,
  handleInsertNode,
  handleDeleteNode,
  handleRenameNode,
  searchTerm,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(explorer.name);

  // 🔍 Highlight matching search terms
  const normalizedSearchTerm = (searchTerm || '').trim().toLowerCase();
  const match =
    normalizedSearchTerm.length > 0 &&
    explorer.name.toLowerCase().includes(normalizedSearchTerm);
  const highlightStyle = match
    ? { backgroundColor: 'yellow' }
    : { backgroundColor: 'transparent' };

  // ➕ Create new folder/file
  const handleNew = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder });
  };

  // ✅ Add node on Enter key
  const handleAddNode = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  // ✏️ Rename logic
  const handleRename = (e) => {
    if (e.key === 'Enter' && newName.trim()) {
      handleRenameNode(explorer.id, newName.trim());
      setIsRenaming(false);
    }
  };

  return (
    <Box sx={{ pl: 2, mt: 1 }}>
      {explorer.isFolder ? (
        <Box>
          <Box
            display="flex"
            alignItems="center"
            onClick={() => setExpand(!expand)}
            sx={{ cursor: 'pointer' }}>
            {expand ? (
              <FolderOpen color="primary" />
            ) : (
              <Folder color="action" />
            )}

            {/* 📄 Folder name or rename input */}
            {isRenaming ? (
              <input
                type="text"
                value={newName}
                autoFocus
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={handleRename}
                onClick={(e) => e.stopPropagation()}
                style={{
                  marginLeft: 8,
                  padding: 2,
                  border: '1px solid #ccc',
                  borderRadius: 4,
                }}
              />
            ) : (
              <Typography sx={{ ml: 1, ...highlightStyle }}>
                {explorer.name}
              </Typography>
            )}

            {/* Action Buttons */}
            <IconButton
              size="small"
              onClick={(e) => handleNew(e, true)}
              title="Add Folder">
              <Folder fontSize="inherit" color="action" />
            </IconButton>

            <IconButton
              size="small"
              onClick={(e) => handleNew(e, false)}
              title="Add File">
              <Add fontSize="inherit" color="action" />
            </IconButton>

            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setIsRenaming(true);
              }}
              title="Rename">
              <Edit fontSize="inherit" color="action" />
            </IconButton>

            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteNode(explorer.id);
              }}
              title="Delete">
              <Delete fontSize="inherit" color="action" />
            </IconButton>
          </Box>

          {/* 🔽 Folder children */}
          <Collapse in={expand} sx={{ pl: 2 }}>
            {/* Input for new node */}
            {showInput.visible && (
              <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                {showInput.isFolder ? (
                  <Folder color="action" />
                ) : (
                  <InsertDriveFile color="action" />
                )}
                <input
                  type="text"
                  autoFocus
                  onKeyDown={handleAddNode}
                  onClick={(e) => e.stopPropagation()}
                  style={{ marginLeft: 8 }}
                />
              </Box>
            )}

            {/* Recursive render of children */}
            {explorer.items?.map((exp) => (
              <FileExplorer
                key={exp.id}
                explorer={exp}
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                handleRenameNode={handleRenameNode}
                searchTerm={searchTerm}
              />
            ))}
          </Collapse>
        </Box>
      ) : (
        // 🧾 File view
        <Box display="flex" alignItems="center" sx={{ pl: 4 }}>
          <InsertDriveFile fontSize="small" color="action" />
          {isRenaming ? (
            <input
              type="text"
              value={newName}
              autoFocus
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={handleRename}
              style={{
                marginLeft: 8,
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: 4,
              }}
            />
          ) : (
            <Typography sx={{ ml: 1, ...highlightStyle }}>
              {explorer.name}
            </Typography>
          )}

          {/* Edit/Delete buttons for files too */}
          <IconButton
            size="small"
            onClick={() => setIsRenaming(true)}
            title="Rename">
            <Edit fontSize="inherit" color="action" />
          </IconButton>

          <IconButton
            size="small"
            onClick={() => handleDeleteNode(explorer.id)}
            title="Delete">
            <Delete fontSize="inherit" color="action" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default FileExplorer;
